import { Link } from "react-router-dom";
import { user } from "./data/User";

const Header = () => {
  const { firstName } = user;
  return (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-3xl font-bold hover:text-gray-300"
          accessKey="j"
          title="Home (Alt + j)"
        >
          {firstName}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/about"
              className="text-white text-lg hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white text-lg hover:text-gray-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
