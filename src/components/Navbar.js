import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Devfolio
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                to="/freelance"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Freelance
              </Link>
              <Link
                to="/events"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Events
              </Link>
              <Link
                to="/community"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 