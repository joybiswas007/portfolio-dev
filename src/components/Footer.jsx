import { Link } from "react-router-dom";
import { user } from "./data/User";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} </p>
        <p className="text-sm mt-2">
          Made with <span className="text-red-500">&#9829;</span> by {user.fullname}
        </p>
        <div className="mt-4">
          <Link target="_blank"
            rel="noopener noreferrer" to={user.github} className="text-gray-400 hover:text-gray-200 mx-2">GitHub</Link>
          <Link target="_blank"
            rel="noopener noreferrer" to={`mailto:${user.mail}`} className="text-gray-400 hover:text-gray-200 mx-2">Email</Link>
          <Link target="_blank"
            rel="noopener noreferrer" to={user.linkedin} className="text-gray-400 hover:text-gray-200 mx-2">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
