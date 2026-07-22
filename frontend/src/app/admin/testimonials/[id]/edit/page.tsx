'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { testimonialsApi, examsApi } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import Button from '@/components/ui/Button';

export default function EditTestimonialPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [examLoading, setExamLoading] = useState(true);
  const [exams, setExams] = useState<{ id: string; name: string }[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    exam: '',
    rank: '',
    year: '',
    story: '',
    quote: '',
    image: null as File | null,
    imagePreview: '' as string | ArrayBuffer | null,
    isActive: true,
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

  // Handle checkbox for isActive change
  const handleIsActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isActive: e.target.checked }));
  };

  // Load exams for dropdown
  const loadExams = async () => {
    try {
      setExamLoading(true);
      const examData = await examsApi.getAll();
      const examList = (examData.data || []).map((exam: any) => ({
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

  // Load testimonial data
  const loadTestimonial = async () => {
    if (!id) return;

    setLoading(true);
    try {
      const testimonialData = await testimonialsApi.getById(id);
      setFormData({
        name: testimonialData.name,
        exam: testimonialData.exam,
        rank: testimonialData.rank,
        year: testimonialData.year ? testimonialData.year.toString() : '',
        story: testimonialData.story,
        quote: testimonialData.quote,
        image: null, // Don't set existing image as File object
        imagePreview: testimonialData.image || '',
        isActive: testimonialData.isActive,
      });
    } catch (error: any) {
      toast({
        title: 'Error loading testimonial',
        description: error.message || 'Failed to load testimonial',
        variant: 'destructive',
      });
      router.push('/admin/testimonials');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await testimonialsApi.update(id, {
        name: formData.name,
        exam: formData.exam,
        rank: formData.rank,
        year: formData.year ? parseInt(formData.year) : null,
        story: formData.story,
        quote: formData.quote,
        image: formData.image,
        isActive: formData.isActive,
      });

      toast({
        title: 'Testimonial updated successfully',
        description: 'The testimonial has been updated.',
      });
      router.push('/admin/testimonials');
    } catch (error: any) {
      toast({
        title: 'Error updating testimonial',
        description: error.message || 'Failed to update testimonial',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  // Load data when component mounts or id changes
  useEffect(() => {
    loadExams();
    loadTestimonial();
  }, [id]);

  if (!user) {
    return <div>Redirecting...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading testimonial...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Testimonial</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
              Rank
            </label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              min="1900"
              max="2100"
              step="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story
            </label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quote
            </label>
            <input
              type="text"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              {/* We don't have the testimonial object here to show current image, but we could store it in state if needed */}
              {/* For now, we'll just show the preview if a new image is selected, otherwise nothing */}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Active
              </label>
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
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/testimonials')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {saving ? 'Saving...' : 'Update Testimonial'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}