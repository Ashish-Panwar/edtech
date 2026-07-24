'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usersApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function AdminUsersCreatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'admin',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await usersApi.create(formData);
      toast({
        title: 'User created',
        description: 'The user has been created successfully.',
        variant: 'default',
      });
      router.push('/admin/users');
    } catch (err: any) {
      setError(err.message || 'Failed to create user');
      console.error('Error creating user:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to create user',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Add New User</h1>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="mt-1 block w-full"
          />
        </div>

        <div className="flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push('/admin/users')}
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
            {loading ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </form>
    </div>
  );
}