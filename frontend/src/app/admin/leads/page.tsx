'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { leadsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AdminTable from '@/components/ui/AdminTable';
import AdminDeleteConfirmation from '@/components/ui/AdminDeleteConfirmation';
import Skeleton from '@/components/ui/Skeleton';

// Types for our leads list response
interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  examInterest: string;
  message: string | null;
  source: string | null;
  status: string;
  createdAt: string;
  updatedAt: string | null;
}

interface LeadsListResponse {
  data: Lead[];
  total: number;
}

export default function AdminLeadsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  // State for leads and pagination
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'createdAt');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc');
  const [filterStatus, setFilterStatus] = useState(searchParams.get('status') || '');
  const [filterExam, setFilterExam] = useState(searchParams.get('exam') || '');

  // Delete confirmation state
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  // Fetch leads with current filters
  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const leadsResponse = await leadsApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
        exam: filterExam || undefined,
        status: filterStatus || undefined,
      });

      setLeads(leadsResponse.data);
      setTotal(leadsResponse.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load leads');
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when params change
  useEffect(() => {
    fetchLeads();
  }, [page, limit, sortBy, sortOrder, filterStatus, filterExam]);

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

  // Handle status filter change
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
    setPage(1); // Reset to first page when changing filter
    const params = new URLSearchParams(searchParams.toString());
    params.set('status', e.target.value);
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle exam filter change
  const handleExamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterExam(e.target.value);
    setPage(1); // Reset to first page when changing filter
    const params = new URLSearchParams(searchParams.toString());
    params.set('exam', e.target.value);
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
      await leadsApi.delete(deleteId);
      // Refetch leads
      await fetchLeads();
      toast({
        title: 'Lead deleted',
        description: 'The lead has been deleted successfully.',
        variant: 'default',
      });
    } catch (err: any) {
      setError('Failed to delete lead: ' + (err.message || 'Unknown error'));
      console.error('Error deleting lead:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to delete lead',
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
    { accessor: 'phone', header: 'Phone' },
    { accessor: 'email', header: 'Email', format: (value: string | null) => value || '-' },
    { accessor: 'examInterest', header: 'Exam Interest' },
    { accessor: 'source', header: 'Source', format: (value: string | null) => value || '-' },
    { accessor: 'status', header: 'Status' },
    { accessor: 'createdAt', header: 'Date', format: (value: string) => new Date(value).toLocaleDateString() },
  ];

  // Define actions for the AdminTable
  const actions = [
    {
      label: 'Edit',
      onClick: (lead: Lead) => {
        router.push(`/admin/leads/${lead.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (lead: Lead) => {
        handleDeleteClick(lead.id);
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
                      <Skeleton type="avatar" width={24} height={24} className="mr-2" />
                      <Skeleton type="text" width={80} height={16} className="w-32" />
                    </>
                  )}
                  {colIndex === 1 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 2 && <Skeleton type="text" width={128} height={16} className="w-64" />}
                  {colIndex === 3 && <Skeleton type="text" width={96} height={16} className="w-48" />}
                  {colIndex === 4 && <Skeleton type="text" width={96} height={16} className="w-48" />}
                  {colIndex === 5 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 6 && <Skeleton type="text" width={64} height={16} className="w-32" />}
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
          <h1 className="text-2xl font-bold mb-4">Admin Leads Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/leads/new" className="btn btn-primary">
              Add New Lead
            </Link>
            {/* Filter controls omitted for brevity in skeleton - in real UI they would be visible */}
          </div>
        </div>

        {/* Skeleton Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Name',
                  'Phone',
                  'Email',
                  'Exam Interest',
                  'Source',
                  'Status',
                  'Date',
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
            <Skeleton type="text" width={64} height={16} className="w-32" /> leads
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
          <h1 className="text-2xl font-bold mb-4">Admin Leads Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/leads/new" className="btn btn-primary">
              Add New Lead
            </Link>
            {/* Filter controls would be here */}
          </div>
        </div>
        <div className="p-4 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
        {/* Still show the table structure but with error? We'll just show the error for now */}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Admin Leads Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/leads/new" className="btn btn-primary">
            Add New Lead
          </Link>
          <div className="flex items-center gap-2">
            <select
              value={filterStatus}
              onChange={handleStatusChange}
              className="border border-gray-300 rounded px-2 py-1 bg-white text-sm"
            >
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
            <select
              value={filterExam}
              onChange={handleExamChange}
              className="border border-gray-300 rounded px-2 py-1 bg-white text-sm"
            >
              <option value="">All Exams</option>
              <option value="UPSC">UPSC</option>
              <option value="IIT-JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="SSC">SSC</option>
              <option value="CAT">CAT</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          leads={leads}
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
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} leads
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