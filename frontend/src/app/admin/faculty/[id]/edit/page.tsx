'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { facultyApi } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import Button from '@/components/ui/Button';

export default function EditFacultyPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    experience: '',
    qualification: '',
    bio: '',
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

  // Load faculty data
  const loadFaculty = async () => {
    if (!id) return;

    setLoading(true);
    try {
      const facultyData = await facultyApi.getById(id);
      setFormData({
        name: facultyData.name,
        subject: facultyData.subject,
        experience: facultyData.experience,
        qualification: facultyData.qualification,
        bio: facultyData.bio,
        image: null, // Don't set existing image as File object
        imagePreview: facultyData.image || '',
        isActive: facultyData.isActive,
      });
    } catch (error: any) {
      toast({
        title: 'Error loading faculty',
        description: error.message || 'Failed to load faculty',
        variant: 'destructive',
      });
      router.push('/admin/faculty');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await facultyApi.update(id, {
        name: formData.name,
        subject: formData.subject,
        experience: formData.experience,
        qualification: formData.qualification,
        bio: formData.bio,
        image: formData.image,
        isActive: formData.isActive,
      });

      toast({
        title: 'Faculty updated successfully',
        description: 'The faculty member has been updated.',
      });
      router.push('/admin/faculty');
    } catch (error: any) {
      toast({
        title: 'Error updating faculty',
        description: error.message || 'Failed to update faculty',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  // Load data when component mounts or id changes
  useEffect(() => {
    loadFaculty();
  }, [id]);

  if (!user) {
    return <div>Redirecting...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading faculty...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Faculty</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
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
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 10 years"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="e.g., PhD, IIT"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
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
              {/* We don't have the faculty object here to show current image, but we could store it in state if needed */}
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
              onClick={() => router.push('/admin/faculty')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {saving ? 'Saving...' : 'Update Faculty'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}