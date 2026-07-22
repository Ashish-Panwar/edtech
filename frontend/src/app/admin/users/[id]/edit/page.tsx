'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usersApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useRouter, useParams } from 'next/navigation';

export default function AdminUsersEditPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'admin',
    password: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        router.push('/admin/users');
        return;
      }

      setLoading(true);
      try {
        const user = await usersApi.getById(id);
        setFormData({
          name: user.name,
          email: user.email,
          role: user.role,
          password: '', // Don't pre-fill password for security
        });
      } catch (err: any) {
        setError(err.message || 'Failed to load user');
        console.error('Error loading user:', err);
        toast({
          title: 'Error',
          description: err.message || 'Failed to load user',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, router, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Only include password in update data if it's provided
      const updateData = { ...formData };
      if (!updateData.password) {
        delete updateData.password;
      }

      await usersApi.update(id!, updateData);
      toast({
        title: 'User updated',
        description: 'The user has been updated successfully.',
        variant: 'default',
      });
      router.push('/admin/users');
    } catch (err: any) {
      setError(err.message || 'Failed to update user');
      console.error('Error updating user:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to update user',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading user...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>
        <Link href="/admin/users" className="text-indigo-600 hover:text-indigo-500">
          ← Back to Users
        </Link>
      </div>

      {error && <div className="p-4 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <Select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password (leave blank to keep current)</label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            className="mt-1 block w-full"
          />
        </div>

        <div className="flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push(`/admin/users/${id}`)}
            className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded ${
              loading ? 'opacity-50' : ''
            }`}
          >
            {loading ? 'Updating...' : 'Update User'}
          </button>
        </div>
      </form>
    </div>
  );
}