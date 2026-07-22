'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { statsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import AdminTable from '@/components/ui/AdminTable';
import Skeleton from '@/components/ui/Skeleton';

// Types for our stats list
interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}

interface StatsListResponse {
  data: Stat[];
  total: number;
}

export default function AdminStatsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for stats and pagination
  const [stats, setStats] = useState<Stat[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'label');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'asc');

  // Fetch stats with current filters
  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await statsApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
      });

      setStats(response.data);
      setTotal(response.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load stats');
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when params change
  useEffect(() => {
    fetchStats();
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

  // Define columns for the AdminTable
  const columns = [
    { accessor: 'label', header: 'Label' },
    { accessor: 'value', header: 'Value' },
    { accessor: 'suffix', header: 'Suffix' },
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
      onClick: (stat: Stat) => {
        router.push(`/admin/stats/${stat.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (stat: Stat) => {
        if (window.confirm('Are you sure you want to delete this stat?')) {
          statsApi.delete(stat.id).then(() => {
            fetchStats();
          }).catch(err => {
            console.error('Error deleting stat:', err);
          });
        }
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
            {/* We'll create 6 cells to match the table columns */}
            {[0, 1, 2, 3, 4, 5].map((colIndex) => (
              <td key={`skeleton-${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">
                {/* For each cell, we put a skeleton that mimics the content */}
                <div className="flex items-center space-x-3">
                  {colIndex === 0 && <Skeleton type="text" width={96} height={16} className="w-24" />}
                  {colIndex === 1 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 2 && <Skeleton type="text" width={32} height={16} className="w-16" />}
                  {colIndex === 3 && <Skeleton type="text" width={32} height={16} className="w-16" />}
                  {colIndex === 4 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 5 && (
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
          <h1 className="text-2xl font-bold mb-4">Admin Stats Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/stats/new" className="btn btn-primary">
              Add New Stat
            </Link>
          </div>
        </div>

        {/* Skeleton Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Label',
                  'Value',
                  'Suffix',
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
            <Skeleton type="text" width={64} height={16} className="w-32" /> stats
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
          <h1 className="text-2xl font-bold mb-4">Admin Stats Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/stats/new" className="btn btn-primary">
              Add New Stat
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
        <h1 className="text-2xl font-bold mb-4">Admin Stats Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/stats/new" className="btn btn-primary">
            Add New Stat
          </Link>
        </div>
      </div>

      {/* Stats Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          data={stats}
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
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} stats
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