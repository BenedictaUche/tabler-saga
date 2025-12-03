import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/interface" className="hover:text-blue-400">Interface</Link></li>
          <li><Link to="/components" className="hover:text-blue-400">Components</Link></li>
          <li><Link to="/pages" className="hover:text-blue-400">Pages</Link></li>
          <li><Link to="/forms" className="hover:text-blue-400">Forms</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
          <li><Link to="/documentation" className="hover:text-blue-400">Documentation</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
