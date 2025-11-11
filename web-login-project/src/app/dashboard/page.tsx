export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600">
            Welcome to your protected dashboard
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">User Profile</h3>
              <p className="text-gray-600">View and manage your profile information</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Settings</h3>
              <p className="text-gray-600">Configure your application preferences</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Activity</h3>
              <p className="text-gray-600">View your recent activity and history</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors mr-4"
            >
              Back to Home
            </a>
            <button className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}