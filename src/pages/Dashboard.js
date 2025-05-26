function Dashboard() {
  const stats = [
    {
      name: "Active Gigs",
      value: 0,
      description: "Open freelance opportunities",
    },
    {
      name: "Active Events",
      value: 0,
      description: "Published events you're organizing",
    },
    {
      name: "Communities",
      value: 0,
      description: "Communities you're part of",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          Welcome! Here's an overview of your activity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <div className="mt-4 bg-white shadow rounded-lg">
          <div className="p-4">
            <p className="text-sm text-gray-500">
              Your recent activity will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 