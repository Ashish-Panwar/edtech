'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { coursesApi, examsApi } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import Button from '@/components/ui/Button';

export default function EditCoursePage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [exams, setExams] = useState<Array<{ id: string; name: string }>>([]);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [examLoading, setExamLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    exam: '',
    description: '',
    duration: '',
    mode: '',
    price: '',
    highlights: '' as string,
    image: null as File | null,
    imagePreview: '' as string | ArrayBuffer | null,
    isActive: true,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                        >
    ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle checkbox for isActive change
  const handleIsActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isActive: e.target.checked }));
  };

  // Handle textarea for hints (comma-separated)
  const handleHighlightChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, highlights: e.target.value }));
  };

  // Load exams for dropdown
  const loadExams = async () => {
    try {
      setExamLoading(true);
      const examData = await examsApi.getAll();
      const examList = examData.data.map((exam: any) => ({
        id: exam.id.toString(),
        name: exam.name,
      }));
      setExams(examList);
    } catch (error: any) {
      toast({
        title: 'Error loading exams',
        description: error.message || 'Failed to load exams',
        variant: 'destructive',
      });
    } finally {
      setExamLoading(false);
    }
  };

  // Load course data
  const loadCourse = async () => {
    if (!id) return;

    setLoading(true);
    try {
      const courseData = await coursesApi.getById(id);
      setCourse(courseData);
      setFormData({
        title: courseData.title,
        exam: courseData.exam,
        description: courseData.description,
        duration: courseData.duration,
        mode: courseData.mode,
        price: courseData.price?.toString() || '',
        highlights: (courseData.highlights as string[]).join(', '),
        image: null, // Don't set existing image as File object
        imagePreview: courseData.image || '',
        isActive: courseData.isActive,
      });
    } catch (error: any) {
      toast({
        title: 'Error loading course',
        description: error.message || 'Failed to load course',
        variant: 'destructive',
      });
      router.push('/admin/courses');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (!course) {
        throw new Error('Course data not loaded');
      }

      // Convert comma-separated highlights to array
      const highlightsArray = formData.highlights
        ? formData.highlights.split(',').map((h: string) => h.trim()).filter(Boolean)
        : [];

      await coursesApi.update(id, {
        title: formData.title,
        exam: formData.exam,
        description: formData.description,
        duration: formData.duration,
        mode: formData.mode,
        price: formData.price ? parseFloat(formData.price) : null,
        highlights: highlightsArray,
        image: formData.image ?? undefined,
        isActive: formData.isActive,
      });

      toast({
        title: 'Course updated successfully',
        description: 'The course has been updated.',
      });
      router.push('/admin/courses');
    } catch (error: any) {
      toast({
        title: 'Error updating course',
        description: error.message || 'Failed to update course',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  // Load data when component mounts or id changes
  useEffect(() => {
    loadExams();
    loadCourse();
  }, [id]);

  if (!user) {
    return <div>Redirecting...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading course...</div>;
  }

  if (!course) {
    return <div className="p-6">Course not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam Category
            </label>
            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Exam</option>
              {examLoading ? (
                <option>Loading exams...</option>
              ) : (
                exams.map(exam => (
                  <option key={exam.id} value={exam.name}>
                    {exam.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 6 Months"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mode
              </label>
              <input
                type="text"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                placeholder="e.g., Online & Offline"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formData.imagePreview && (
                <div className="mt-2">
                  <img
                    src={formData.imagePreview as string}
                    alt="Preview"
                    className="h-24 w-24 object-cover rounded"
                  />
                </div>
              )}
              {!formData.imagePreview && course?.image && (
                <div className="mt-2">
                  <img
                    src={course.image}
                    alt="Current image"
                    className="h-24 w-24 object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-start h-5">
              <input
                id="is-active"
                name="isActive"
                type="checkbox"
                checked={formData.isActive}
                onChange={handleIsActiveChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="is-active" className="font-medium text-gray-900">
                Active
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlights (comma-separated)
            </label>
            <textarea
              name="highlights"
              value={formData.highlights}
              onChange={handleHighlightChange}
              rows={3}
              placeholder="e.g., Live classes, Study materials, Mock tests, Mentorship"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/courses')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {saving ? 'Saving...' : 'Update Course'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}