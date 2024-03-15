import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-semibold hover:text-gray-400"
          accessKey="j"
          title="Joy (Alt + J)"
        >
          Joy
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





