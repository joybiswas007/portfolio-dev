import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white justify-center items-center p-4">
      <div className="text-center">
        <img
          draggable="false"
          src={profileImage}
          alt="Joy Biswas"
          className="mx-auto h-24 w-24 rounded-full"
        />
        <h1 className="text-4xl font-bold mt-2">Joy Biswas</h1>
        <div className="mt-2 space-x-2">
          <span className="text-lg font-medium">Node.js Developer</span>
          <span className="text-lg font-medium text-gray-400">|</span>
          <span className="text-lg font-medium">Backend Developer</span>
        </div>
        <div className="mt-8 space-x-4">
          <Link
            to="/about"
            className="bg-transparent hover:bg-gray-700 text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="bg-transparent hover:bg-gray-700 text-gray-400 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
          >
            Projects
          </Link>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/joybiswas007"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="mailto:joybiswas040701@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;