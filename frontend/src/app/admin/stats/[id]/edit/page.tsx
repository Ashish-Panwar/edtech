'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { statsApi } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import Button from '@/components/ui/Button';

export default function EditStatPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    label: '',
    value: 0,
    suffix: '',
    sortOrder: 0,
    isActive: true,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle checkbox for isActive change
  const handleIsActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isActive: e.target.checked }));
  };

  // Load stat data
  const loadStat = async () => {
    if (!id) return;

    setLoading(true);
    try {
      const statData = await statsApi.getById(id);
      setFormData({
        label: statData.label,
        value: statData.value,
        suffix: statData.suffix,
        sortOrder: statData.sortOrder,
        isActive: statData.isActive,
      });
    } catch (error: any) {
      toast({
        title: 'Error loading stat',
        description: error.message || 'Failed to load stat',
        variant: 'destructive',
      });
      router.push('/admin/stats');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await statsApi.update(id, {
        label: formData.label,
        value: parseInt(formData.value) || 0,
        suffix: formData.suffix,
        sortOrder: parseInt(formData.sortOrder) || 0,
        isActive: formData.isActive,
      });

      toast({
        title: 'Stat updated successfully',
        description: 'The stat has been updated.',
      });
      router.push('/admin/stats');
    } catch (error: any) {
      toast({
        title: 'Error updating stat',
        description: error.message || 'Failed to update stat',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  // Load data when component mounts or id changes
  useEffect(() => {
    loadStat();
  }, [id]);

  if (!user) {
    return <div>Redirecting...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading stat...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Stat</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Label
            </label>
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Value
            </label>
            <input
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Suffix (e.g., %, +, K)
            </label>
            <input
              type="text"
              name="suffix"
              value={formData.suffix}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort Order
              </label>
              <input
                type="number"
                name="sortOrder"
                value={formData.sortOrder}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
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
              onClick={() => router.push('/admin/stats')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {saving ? 'Saving...' : 'Update Stat'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}