import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Your All-in-One Tech Collaboration Platform
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Connect with freelancers, organize events, and build communities.
          Everything you need in one place.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/dashboard"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Freelance Feature */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Freelance Marketplace</h3>
              <p className="mt-2 text-base text-gray-500">
                Find or post tech gigs, collaborate on projects, and grow your network.
              </p>
            </div>

            {/* Events Feature */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Event Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Organize and participate in hackathons, webinars, and tech meetups.
              </p>
            </div>

            {/* Community Feature */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Community Hub</h3>
              <p className="mt-2 text-base text-gray-500">
                Join tech communities, chat in real-time, and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 