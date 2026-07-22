'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { coursesApi, examsApi } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import Button from '@/components/ui/Button';

export default function CreateCoursePage() {
  const router = useRouter();
  const [exams, setExams] = useState<Array<{ id: string; name: string }>>([]);
  const [loading, setLoading] = useState(false);
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
    highlights: '' as string, // Comma-separated string for simplicity
    image: null as File | null,
    imagePreview: '' as string | ArrayBuffer | null,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  // Handle textarea for hints (comma-separated)
  const handleHighlightChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, highlights: e.target.value }));
  };

  // Load exams for dropdown
  const loadExams = async () => {
    try {
      setExamLoading(true);
      const examData = await examsApi.getAll();
      // Assuming examsApi.getAll returns { data: Exam[], total: number }
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert comma-separated highlights to array
      const highlightsArray = formData.highlights
        ? formData.highlights.split(',').map((h: string) => h.trim()).filter(Boolean)
        : [];

      await coursesApi.create({
        title: formData.title,
        exam: formData.exam,
        description: formData.description,
        duration: formData.duration,
        mode: formData.mode,
        price: formData.price ? parseFloat(formData.price) : null,
        highlights: highlightsArray,
        image: formData.image,
      });

      toast({
        title: 'Course created successfully',
        description: 'The new course has been added.',
      });
      router.push('/admin/courses');
    } catch (error: any) {
      toast({
        title: 'Error creating course',
        description: error.message || 'Failed to create course',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Load exams when component mounts
  useEffect(() => {
    loadExams();
  }, []);

  if (!user) {
    // Redirect to login if not authenticated
    // This is handled by the admin layout, but just in case
    return <div>Redirecting...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>

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
              disabled={loading}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {loading ? 'Creating...' : 'Create Course'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}