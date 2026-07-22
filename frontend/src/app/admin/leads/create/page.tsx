'use client';

import { useState } from 'react';
import Link from 'next/link';
import { leadsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function AdminLeadsCreatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    examInterest: '',
    message: '',
    source: 'homepage',
    status: 'new',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await leadsApi.create(formData);
      toast({
        title: 'Lead created',
        description: 'The lead has been created successfully.',
        variant: 'default',
      });
      router.push('/admin/leads');
    } catch (err: any) {
      setError(err.message || 'Failed to create lead');
      console.error('Error creating lead:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to create lead',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Add New Lead</h1>
        <Link href="/admin/leads" className="text-indigo-600 hover:text-indigo-500">
          ← Back to Leads
        </Link>
      </div>

      {error && <div className="p-4 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
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
              className="mt-1 block w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Exam Interest</label>
            <Select
              name="examInterest"
              value={formData.examInterest}
              onChange={handleSelectChange}
              required
              className="mt-1 block w-full"
            >
              <option value="">Select exam</option>
              <option value="UPSC">UPSC</option>
              <option value="IIT-JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="SSC">SSC</option>
              <option value="CAT">CAT</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <Select
              name="source"
              value={formData.source}
              onChange={handleSelectChange}
              className="mt-1 block w-full"
            >
              <option value="homepage">Homepage</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <Select
              name="status"
              value={formData.status}
              onChange={handleSelectChange}
              className="mt-1 block w-full"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full"
          />
        </div>

        <div className="flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push('/admin/leads')}
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
            {loading ? 'Creating...' : 'Create Lead'}
          </button>
        </div>
      </form>
    </div>
  );
}