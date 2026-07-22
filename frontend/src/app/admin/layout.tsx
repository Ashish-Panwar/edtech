'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only run the redirect logic when we've finished loading
    if (!loading) {
      if (user) {
        if (user.role !== 'admin') {
          // Redirect to home if not admin
          router.push('/');
        }
      } else {
        // Redirect to login if not authenticated
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If we are here, user is authenticated and is admin
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">PCA</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Admin Panel</span>
            </div>
          </div>

          <nav className="mt-6 space-y-1">
            <Link href="/admin" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Dashboard
            </Link>
            <Link href="/admin/courses" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Courses
            </Link>
            <Link href="/admin/faculty" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Faculty
            </Link>
            <Link href="/admin/testimonials" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Testimonials
            </Link>
            <Link href="/admin/hero-slides" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Hero Slides
            </Link>
            <Link href="/admin/stats" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Statistics
            </Link>
            <Link href="/admin/exams" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Exams
            </Link>
            <Link href="/admin/users" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Users
            </Link>
          </nav>

          <div className="mt-auto p-6 border-t border-gray-200">
            <button
              onClick={() => {
                // We'll need to import and use logout from auth
                // For now, we'll redirect to login
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                router.push('/login');
              }}
              className="w-full text-left text-sm font-medium text-red-600 hover:text-red-500"
            >
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </>
  );
}