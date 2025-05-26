export default function DashboardPage() {
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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome! Here's an overview of your activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </p>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recent Activity</h3>
        <div className="rounded-lg border">
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Your recent activity will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 