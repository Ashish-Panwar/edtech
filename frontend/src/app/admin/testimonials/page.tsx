'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { testimonialsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import AdminTable from '@/components/ui/AdminTable';
import Skeleton from '@/components/ui/Skeleton';

// Types for our testimonials list
interface Testimonial {
  id: string;
  name: string;
  exam: string;
  rank: string | number;
  year: number;
  story: string;
  quote: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}

interface TestimonialsListResponse {
  data: Testimonial[];
  total: number;
}

interface ExamOption {
  id: string;
  name: string;
}

export default function AdminTestimonialsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for testimonials and pagination
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'name');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'asc');
  const [examFilter, setExamFilter] = useState(searchParams.get('exam') || '');
  const [exams, setExams] = useState<ExamOption[]>([]);

  // Fetch testimonials with current filters
  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await testimonialsApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
      });

      let filteredData = response.data;
      if (examFilter) {
        filteredData = filteredData.filter((t: Testimonial) => t.exam === examFilter);
      }
      // Note: For simplicity, we are using the total from the API (unfiltered) for pagination.
      // In a real app, we would want the API to return the filtered total.
      setTestimonials(filteredData);
      setTotal(response.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load testimonials');
      console.error('Error fetching testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch exams for filter dropdown
  const fetchExams = async () => {
    try {
      const examData = await examsApi.getAll();
      const examList = examData.data.map((exam: any) => ({
        id: exam.id.toString(),
        name: exam.name,
      }));
      setExams(examList);
    } catch (err) {
      console.error('Error fetching exams for filter:', err);
      // Continue without exams filter if fails
    }
  };

  // Effect to fetch data when params change
  useEffect(() => {
    fetchTestimonials();
    fetchExams();
  }, [page, limit, sortBy, sortOrder, examFilter]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // Update URL without pushing to history
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle limit change
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value);
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', newLimit.toString());
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [newSortBy, newSortOrder] = e.target.value.split(':');
    setSortBy(newSortBy);
    setSortOrder(newSortOrder as 'asc' | 'desc');
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortBy', newSortBy);
    params.set('sortOrder', newSortOrder);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle exam filter change
  const handleExamFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newExamFilter = e.target.value;
    setExamFilter(newExamFilter);
    setPage(1); // Reset to first page when changing filter
    const params = new URLSearchParams(searchParams.toString());
    if (newExamFilter) {
      params.set('exam', newExamFilter);
    } else {
      params.delete('exam');
    }
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle delete testimonial
  const handleDeleteTestimonial = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) {
      return;
    }

    try {
      await testimonialsApi.delete(id);

      // Refetch testimonials
      await fetchTestimonials();
    } catch (err: any) {
      setError('Failed to delete testimonial: ' + (err.message || 'Unknown error'));
      console.error('Error deleting testimonial:', err);
    }
  };

  // Define columns for the AdminTable
  const columns = [
    { accessor: 'name', header: 'Name' },
    { accessor: 'exam', header: 'Exam' },
    { accessor: 'rank', header: 'Rank' },
    { accessor: 'year', header: 'Year' },
    { accessor: 'story', header: 'Story' },
    { accessor: 'quote', header: 'Quote' },
    { accessor: 'isActive', header: 'Status', format: (value: boolean) => (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {value ? 'Active' : 'Inactive'}
      </span>
    ) },
  ];

  // Define actions for the AdminTable
  const actions = [
    {
      label: 'Edit',
      onClick: (testimonial: Testimonial) => {
        router.push(`/admin/testimonials/${testimonial.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (testimonial: Testimonial) => {
        handleDeleteTestimonial(testimonial.id);
      },
      variant: 'destructive',
    },
  ];

  // Render skeleton rows for loading state
  const renderSkeletonRows = () => {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <tr key={`skeleton-${rowIndex}`} className="hover:bg-gray-50">
            {/* We'll create 8 cells to match the table columns */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((colIndex) => (
              <td key={`skeleton-${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">
                {/* For each cell, we put a skeleton that mimics the content */}
                <div className="flex items-center space-x-3">
                  {colIndex === 0 && (
                    <>
                      <Skeleton type="text" width={80} height={16} className="w-32" />
                    </>
                  )}
                  {colIndex === 1 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 2 && <Skeleton type="text" width={32} height={16} className="w-16" />}
                  {colIndex === 3 && <Skeleton type="text" width={32} height={16} className="w-16" />}
                  {colIndex === 4 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 5 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 6 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 7 && (
                    <div className="flex space-x-2">
                      <Skeleton type="text" width={32} height={16} className="w-16" />
                      <Skeleton type="text" width={32} height={16} className="w-16" />
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Admin Testimonials Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/testimonials/new" className="btn btn-primary">
              Add New Testimonial
            </Link>
          </div>
        </div>

        {/* Filters Skeleton */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Skeleton type="text" width={96} height={16} className="w-24" />
            </div>
            <div>
              <Skeleton type="text" width={96} height={16} className="w-24" />
            </div>
            <div>
              <Skeleton type="text" width={64} height={16} className="w-16" />
            </div>
          </div>
        </div>

        {/* Testimonials Table Skeleton */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Name',
                  'Exam',
                  'Rank',
                  'Year',
                  'Story',
                  'Quote',
                  'Status',
                  'Actions',
                ].map((header, index) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            {renderSkeletonRows()}
          </table>
        </div>

        {/* Pagination Skeleton */}
        <div className="mt-6 flex items-center justify-between px-4">
          <div className="text-sm text-gray-500">
            <Skeleton type="text" width={128} height={16} className="w-32" /> of
            <Skeleton type="text" width={64} height={16} className="w-32" /> testimonials
          </div>
          <div className="flex space-x-2">
            <Skeleton type="text" width={64} height={16} className="w-32" />
            <Skeleton type="text" width={64} height={16} className="w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Admin Testimonials Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/testimonials/new" className="btn btn-primary">
              Add New Testimonial
            </Link>
          </div>
        </div>
        <div className="p-4 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Admin Testimonials Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/testimonials/new" className="btn btn-primary">
            Add New Testimonial
          </Link>
          <div className="flex items-center gap-2">
            <select
              value={examFilter}
              onChange={handleExamFilterChange}
              className="border border-gray-300 rounded px-2 py-1 bg-white text-sm"
            >
              <option value="">All Exams</option>
              {exams.map((exam: ExamOption) => (
                <option key={exam.id} value={exam.name}>
                  {exam.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sort By:</label>
            <select
              value={`${sortBy}:${sortOrder}`}
              onChange={handleSortChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="name:asc">Name (A-Z)</option>
              <option value="name:desc">Name (Z-A)</option>
              <option value="exam:asc">Exam (A-Z)</option>
              <option value="exam:desc">Exam (Z-A)</option>
              <option value="year:asc">Year (Oldest)</option>
              <option value="year:desc">Year (Newest)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Exam Filter:</label>
            <select
              value={examFilter}
              onChange={handleExamFilterChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">All Exams</option>
              {exams.map((exam: ExamOption) => (
                <option key={exam.id} value={exam.name}>
                  {exam.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Items per page:</label>
            <select
              value={limit}
              onChange={handleLimitChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>

      {/* Testimonials Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          testimonials={testimonials}
          columns={columns}
          actions={actions}
          showCheckbox={false}
          total={total}
          page={page}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Pagination */}
      {total > limit && (
        <div className="mt-6 flex items-center justify-between px-4">
          <div className="text-sm text-gray-500">
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} testimonials
          </div>
          <div>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
              className={`px-3 py-1 mr-2 text-sm font-medium ${
                page <= 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page * limit >= total}
              className={`px-3 py-1 text-sm font-medium ${
                page * limit >= total
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}