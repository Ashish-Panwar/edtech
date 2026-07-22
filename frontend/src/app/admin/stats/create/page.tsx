'use client';

import { useState } from 'react';
import Link from 'next/link';
import { statsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function AdminStatsCreatePage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Form state
  const [label, setLabel] = useState('');
  const [value, setValue] = useState(0);
  const [suffix, setSuffix] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await statsApi.create({
        label,
        value,
        suffix,
        sortOrder,
        isActive,
      });

      toast({
        title: 'Stat created successfully',
        description: 'The stat has been added.',
        variant: 'default',
      });

      router.push('/admin/stats');
    } catch (err: any) {
      setError(err.message || 'Failed to create stat');
      toast({
        title: 'Error',
        description: err.message || 'Failed to create stat',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Add New Stat</h1>
        <Link href="/admin/stats" className="text-indigo-600 hover:text-indigo-500">
          ← Back to Stats
        </Link>
      </div>

      {error && <div className="p-4 mb-4 bg-red-50 border border-red-200 text-red-500 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Suffix (e.g., %, +, K)</label>
          <input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sort Order</label>
            <input
              type="number"
              value={sortOrder}
              onChange={(e) => setSortOrder(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              Active
            </label>
          </div>
        </div>

        <Button type="submit" isLoading={loading}>
          Create Stat
        </Button>
      </form>
    </div>
  );
}