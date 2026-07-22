'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { examsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AdminTable from '@/components/ui/AdminTable';
import AdminDeleteConfirmation from '@/components/ui/AdminDeleteConfirmation';
import Skeleton from '@/components/ui/Skeleton';

// Types for our exams list response
interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string | null;
  href: string;
  gradient: string;
  color: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}

interface ExamsListResponse {
  data: Exam[];
  total: number;
}

export default function AdminExamsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  // State for exams and pagination
  const [exams, setExams] = useState<Exam[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'name');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'asc');

  // Fetch exams with current filters
  const fetchExams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await examsApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
      });

      setExams(response.data);
      setTotal(response.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load exams');
      console.error('Error fetching exams:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when params change
  useEffect(() => {
    fetchExams();
  }, [page, limit, sortBy, sortOrder]);

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

  // Handle delete exam
  const handleDeleteExam = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this exam?')) {
      return;
    }

    try {
      await examsApi.delete(id);

      // Refetch exams
      await fetchExams();
      toast({
        title: 'Exam deleted',
        description: 'The exam has been deleted successfully.',
        variant: 'default',
      });
    } catch (err: any) {
      setError('Failed to delete exam: ' + (err.message || 'Unknown error'));
      console.error('Error deleting exam:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to delete exam',
        variant: 'destructive',
      });
    }
  };

  // Define columns for the AdminTable
  const columns = [
    { accessor: 'name', header: 'Name' },
    { accessor: 'fullName', header: 'Full Name' },
    { accessor: 'description', header: 'Description' },
    { accessor: 'icon', header: 'Icon', format: (value: string | null) => (value ? <img src={value} alt="Icon" className="h-5 w-5" /> : 'None') },
    { accessor: 'href', header: 'HREF' },
    { accessor: 'gradient', header: 'Gradient' },
    { accessor: 'color', header: 'Color' },
    { accessor: 'sortOrder', header: 'Sort Order' },
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
      onClick: (exam: Exam) => {
        router.push(`/admin/exams/${exam.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (exam: Exam) => {
        handleDeleteExam(exam.id);
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
            {/* We'll create 10 cells to match the table columns */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((colIndex) => (
              <td key={`skeleton-${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">
                {/* For each cell, we put a skeleton that mimics the content */}
                <div className="flex items-center space-x-3">
                  {colIndex === 0 && (
                    <>
                      <Skeleton type="text" width={80} height={16} className="w-32" />
                    </>
                  )}
                  {colIndex === 1 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 2 && <Skeleton type="text" width={192} height={16} className="w-96" />}
                  {colIndex === 3 && (
                    <>
                      <Skeleton type="image" width={32} height={32} className="mr-2" />
                      <Skeleton type="text" width={64} height={16} className="w-32" />
                    </>
                  )}
                  {colIndex === 4 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 5 && <Skeleton type="text" width={96} height={16} className="w-48" />}
                  {colIndex === 6 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 7 && <Skeleton type="text" width={32} height={16} className="w-16" />}
                  {colIndex === 8 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 9 && (
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
          <h1 className="text-2xl font-bold mb-4">Admin Exams Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/exams/new" className="btn btn-primary">
              Add New Exam
            </Link>
          </div>
        </div>

        {/* Skeleton Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Name',
                  'Full Name',
                  'Description',
                  'Icon',
                  'HREF',
                  'Gradient',
                  'Color',
                  'Sort Order',
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

        {/* Pagination skeleton */}
        <div className="mt-6 flex items-center justify-between px-4">
          <div className="text-sm text-gray-500">
            <Skeleton type="text" width={128} height={16} className="w-32" /> of
            <Skeleton type="text" width={64} height={16} className="w-32" /> exams
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
          <h1 className="text-2xl font-bold mb-4">Admin Exams Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/exams/new" className="btn btn-primary">
              Add New Exam
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
        <h1 className="text-2xl font-bold mb-4">Admin Exams Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/exams/new" className="btn btn-primary">
            Add New Exam
          </Link>
        </div>
      </div>

      {/* Exams Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          data={exams}
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
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} exams
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