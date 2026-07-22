'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usersApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AdminTable from '@/components/ui/AdminTable';
import AdminDeleteConfirmation from '@/components/ui/AdminDeleteConfirmation';
import Skeleton from '@/components/ui/Skeleton';

// Types for our users list response
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

interface UsersListResponse {
  data: User[];
  total: number;
}

export default function AdminUsersPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  // State for users and pagination
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'createdAt');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc');
  const [filterRole, setFilterRole] = useState(searchParams.get('role') || '');

  // Delete confirmation state
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  // Fetch users with current filters
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const usersResponse = await usersApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
        role: filterRole || undefined,
      });

      setUsers(usersResponse.data);
      setTotal(usersResponse.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when params change
  useEffect(() => {
    fetchUsers();
  }, [page, limit, sortBy, sortOrder, filterRole]);

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

  // Handle role filter change
  const handleRoleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRole(e.target.value);setPage(1); // Reset to first page when changing filter
    const params = new URLSearchParams(searchParams.toString());
    params.set('role', e.target.value);
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle delete confirmation open
  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setIsDeleteConfirmOpen(true);
  };

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await usersApi.delete(deleteId);
      // Refetch users
      await fetchUsers();
      toast({
        title: 'User deleted',
        description: 'The user has been deleted successfully.',
        variant: 'default',
      });
    } catch (err: any) {
      setError('Failed to delete user: ' + (err.message || 'Unknown error'));
      console.error('Error deleting user:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to delete user',
        variant: 'destructive',
      });
    } finally {
      setDeleteId(null);
      setIsDeleteConfirmOpen(false);
    }
  };

  // Handle delete cancellation
  const handleCancelDelete = () => {
    setDeleteId(null);
    setIsDeleteConfirmOpen(false);
  };

  // Define columns for the AdminTable
  const columns = [
    { accessor: 'name', header: 'Name' },
    { accessor: 'email', header: 'Email' },
    { accessor: 'role', header: 'Role', format: (value: string) => value.charAt(0).toUpperCase() + value.slice(1) },
    { accessor: 'createdAt', header: 'Date Joined', format: (value: string) => new Date(value).toLocaleDateString() },
  ];

  // Define actions for the AdminTable
  const actions = [
    {
      label: 'Edit',
      onClick: (user: User) => {
        router.push(`/admin/users/${user.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (user: User) => {
        handleDeleteClick(user.id);
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
            {/* We'll create 5 cells to match the table columns */}
            {[0, 1, 2, 3, 4].map((colIndex) => (
              <td key={`skeleton-${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">
                {/* For each cell, we put a skeleton that mimics the content */}
                <div className="flex items-center space-x-3">
                  {colIndex === 0 && (
                    <>
                      <Skeleton type="avatar" width={24} height={24} className="mr-2" />
                      <Skeleton type="text" width={80} height={16} className="w-32" />
                    </>
                  )}
                  {colIndex === 1 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 2 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 3 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 4 && (
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
          <h1 className="text-2xl font-bold mb-4">Admin Users Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/users/new" className="btn btn-primary">
              Add New User
            </Link>
            {/* Filter controls */}
          </div>
        </div>

        {/* Skeleton Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Name',
                  'Email',
                  'Role',
                  'Date Joined',
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
            <Skeleton type="text" width={64} height={16} className="w-32" /> users
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
          <h1 className="text-2xl font-bold mb-4">Admin Users Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/users/new" className="btn btn-primary">
              Add New User
            </Link>
            {/* Filter controls */}
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
        <h1 className="text-2xl font-bold mb-4">Admin Users Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/users/new" className="btn btn-primary">
            Add New User
          </Link>
          <div className="flex items-center gap-2">
            <select
              value={filterRole}
              onChange={handleRoleFilterChange}
              className="border border-gray-300 rounded px-2 py-1 bg-white text-sm"
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          users={users}
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
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} users
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