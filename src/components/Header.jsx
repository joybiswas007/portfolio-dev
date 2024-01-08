import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="/" accessKey="j" title="Joy (Alt + J)" className="text-xl font-semibold hover:text-gray-300">
            Joy
          </a>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;