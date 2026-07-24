'use client';

import { useState } from 'react';
import Link from 'next/link';
import { examsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export function AdminExamsCreatePage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [href, setHref] = useState('');
  const [gradient, setGradient] = useState('');
  const [color, setColor] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await examsApi.create({ name, fullName, description, icon, href, gradient, color, sortOrder, isActive });
      toast({ title: 'Exam created successfully', description: 'The exam has been added.', variant: 'default' });
      router.push('/admin/exams');
    } catch (err: any) {
      setError(err.message || 'Failed to create exam');
      toast({ title: 'Error', description: err.message || 'Failed to create exam', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Add New Exam</h1>
        <Link href="/admin/exams" className="text-indigo-600 hover:text-indigo-500">← Back to Exams</Link>
      </div>

      {error && <div className="p-4 mb-4 bg-red-50 border border-red-200 text-red-500 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>

        <div><label>Icon URL (optional)</label><input value={icon} onChange={(e)=>setIcon(e.target.value)} className="w-full px-4 py-2 border rounded" /></div>
        <div><label>Href (optional)</label><input value={href} onChange={(e)=>setHref(e.target.value)} className="w-full px-4 py-2 border rounded" /></div>
        <div><label>Gradient (optional)</label><input value={gradient} onChange={(e)=>setGradient(e.target.value)} className="w-full px-4 py-2 border rounded" /></div>
        <div><label>Color (optional)</label><input value={color} onChange={(e)=>setColor(e.target.value)} className="w-full px-4 py-2 border rounded" /></div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Sort Order</label>
            <input type="number" value={sortOrder} onChange={(e)=>setSortOrder(parseInt(e.target.value) || 0)} className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label>
              <input type="checkbox" checked={isActive} onChange={(e)=>setIsActive(e.target.checked)} /> Active
            </label>
          </div>
        </div>

        <Button type="submit" disabled={loading}>Create Exam</Button>
      </form>
    </div>
  );
}
