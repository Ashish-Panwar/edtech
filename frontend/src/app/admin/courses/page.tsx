'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { coursesApi, examsApi } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import AdminTable, { ColumnType, ActionItem } from '@/components/ui/AdminTable';
import Skeleton from '@/components/ui/Skeleton';

// Types for our course list
interface Course {
  id: string;
  title: string;
  slug: string;
  exam: string;
  duration: string;
  price: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}

interface CourseListResponse {
  data: Course[];
  total: number;
}

interface ExamOption {
  id: string;
  name: string;
}

export default function AdminCoursesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for courses and pagination
  const [courses, setCourses] = useState<Course[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination and filter state
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const [limit, setLimit] = useState(Number(searchParams.get('limit') || 10));
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'title');
  const [sortOrder, setSortOrder] = useState((searchParams.get('sortOrder') as 'asc' | 'desc') || 'asc');
  const [examFilter, setExamFilter] = useState(searchParams.get('exam') || '');
  const [exams, setExams] = useState<ExamOption[]>([]);

  // Fetch courses with current filters
  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await coursesApi.getAll({
        page,
        limit,
        sortBy,
        sortOrder,
        exam: examFilter || undefined,
      });

      setCourses(response.data);
      setTotal(response.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load courses');
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch exams for filter dropdown
  const fetchExams = async () => {
    try {
      const examData = await examsApi.getAll();
      // Assuming examsApi.getAll returns { data: Exam[], total: number }
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
    fetchCourses();
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

  // Define columns for the AdminTable
const columns: ColumnType<Course>[] = [
    { accessor: 'title', header: 'Title' },
    { accessor: 'slug', header: 'Slug' },
    { accessor: 'exam', header: 'Exam' },
    { accessor: 'duration', header: 'Duration' },
    { accessor: 'price', header: 'Price', format: (value: number | null) => value === null ? 'Free' : `$${value}` },
    { accessor: 'isActive', header: 'Status', format: (value: boolean) =>
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {value ? 'Active' : 'Inactive'}
      </span>
    },
  ];

  // Define actions for the AdminTable
const actions: ActionItem[] = [
    {
      label: 'Edit',
      onClick: (course: Course) => {
        router.push(`/admin/courses/${course.id}/edit`);
      },
    },
    {
      label: 'Delete',
      onClick: (course: Course) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
          coursesApi.delete(course.id).then(() => {
            fetchCourses();
          }).catch(err => {
            console.error('Error deleting course:', err);
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
            {/* We'll create 7 cells to match the table columns */}
            {[0, 1, 2, 3, 4, 5, 6].map((colIndex) => (
              <td key={`skeleton-${rowIndex}-${colIndex}`} className="px-6 py-4 whitespace-nowrap">
                {/* For each cell, we put a skeleton that mimics the content */}
                <div className="flex items-center space-x-3">
                  {colIndex === 0 && (
                    <>
                      <Skeleton type="text" width={128} height={16} className="w-64" />
                    </>
                  )}
                  {colIndex === 1 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 2 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 3 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 4 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 w-24">
                      <Skeleton type="text" width={32} height={16} className="w-full" />
                    </span>
                  )}
                  {colIndex === 5 && <Skeleton type="text" width={64} height={16} className="w-32" />}
                  {colIndex === 6 && (
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
          <h1 className="text-2xl font-bold mb-4">Admin Course Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/courses/new" className="btn btn-primary">
              Add New Course
            </Link>
          </div>
        </div>

        {/* Filters skeleton */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Sort By:</label>
              <Skeleton type="text" width={128} height={24} className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Exam Filter:</label>
              <Skeleton type="text" width={128} height={24} className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Items per page:</label>
              <Skeleton type="text" width={64} height={24} className="w-32" />
            </div>
          </div>
        </div>

        {/* Courses Table skeleton */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  'Title',
                  'Slug',
                  'Exam',
                  'Duration',
                  'Price',
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
            <Skeleton type="text" width={64} height={16} className="w-32" /> courses
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
          <h1 className="text-2xl font-bold mb-4">Admin Course Management</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/admin/courses/new" className="btn btn-primary">
              Add New Course
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
        <h1 className="text-2xl font-bold mb-4">Admin Course Management</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/admin/courses/new" className="btn btn-primary">
            Add New Course
          </Link>
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
              <option value="title:asc">Title (A-Z)</option>
              <option value="title:desc">Title (Z-A)</option>
              <option value="exam:asc">Exam (A-Z)</option>
              <option value="exam:desc">Exam (Z-A)</option>
              <option value="createdAt:asc">Date (Oldest)</option>
              <option value="createdAt:desc">Date (Newest)</option>
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
              {exams.map((exam) => (
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

      {/* Courses Table using AdminTable */}
      <div className="overflow-x-auto">
        <AdminTable
          data={courses}
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
            Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} courses
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