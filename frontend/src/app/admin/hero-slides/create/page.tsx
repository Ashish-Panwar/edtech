'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { heroSlidesApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function AdminHeroSlidesCreatePage() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Form state
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [ctaPrimaryText, setCtaPrimaryText] = useState('');
  const [ctaPrimaryLink, setCtaPrimaryLink] = useState('');
  const [ctaSecondaryText, setCtaSecondaryText] = useState('');
  const [ctaSecondaryLink, setCtaSecondaryLink] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    setImageFile(file);
    setError(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('ctaPrimary.text', ctaPrimaryText);
      formData.append('ctaPrimary.link', ctaPrimaryLink);
      formData.append('ctaSecondary.text', ctaSecondaryText);
      formData.append('ctaSecondary.link', ctaSecondaryLink);
      formData.append('sortOrder', sortOrder.toString());
      formData.append('isActive', isActive.toString());

      if (imageFile) {
        formData.append('image', imageFile);
      }

      await heroSlidesApi.create(formData);

      toast({
        title: 'Hero slide created successfully',
        description: 'The new hero slide has been added.',
        variant: 'default',
      });

      router.push('/admin/hero-slides');
    } catch (err: any) {
      setError(err.message || 'Failed to create hero slide');
      toast({
        title: 'Error',
        description: err.message || 'Failed to create hero slide',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Add New Hero Slide</h1>
        <Link href="/admin/hero-slides" className="text-indigo-600 hover:text-indigo-500">
          ← Back to Hero Slides
        </Link>
      </div>

      {error && <div className="p-4 mb-4 bg-red-50 border border-red-200 text-red-500 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subtitle</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">CTA Primary</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Text</label>
              <input
                type="text"
                value={ctaPrimaryText}
                onChange={(e) => setCtaPrimaryText(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Link (optional)</label>
              <input
                type="text"
                value={ctaPrimaryLink}
                onChange={(e) => setCtaPrimaryLink(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">CTA Secondary</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Text</label>
              <input
                type="text"
                value={ctaSecondaryText}
                onChange={(e) => setCtaSecondaryText(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Link (optional)</label>
              <input
                type="text"
                value={ctaSecondaryLink}
                onChange={(e) => setCtaSecondaryLink(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image Upload</label>
          <div className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs h-auto rounded border border-gray-200"
                />
              </div>
            )}
          </div>
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
          Create Hero Slide
        </Button>
      </form>
    </div>
  );
}