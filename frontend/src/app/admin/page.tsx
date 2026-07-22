import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <p className="text-gray-600">Manage course offerings</p>
          <Link href="/admin/courses" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
            Manage Courses →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Faculty</h2>
          <p className="text-gray-600">Manage instructor profiles</p>
          <Link href="/admin/faculty" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
            Manage Faculty →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <p className="text-gray-600">Manage user accounts</p>
          <Link href="/admin/users" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
            Manage Users →
          </Link>
        </div>
      </div>
    </div>
  );
}