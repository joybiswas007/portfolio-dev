import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";

const Home = () => {
  return (
    <div className="container mx-auto p-8 text-white text-center">
      <img
        className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full mb-4"
        draggable="false"
        src={profileImage}
        alt="Joy Biswas"
      />
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Joy Biswas</h1>
      <div className="mb-4">
        <span className="text-gray-400">Node.js Developer</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="text-gray-400">Backend Developer</span>
      </div>
      <div className="mb-8 space-x-4">
        <Link to="/about" className="text-blue-400 hover:underline">
          About
        </Link>
        <Link to="/projects" className="text-blue-400 hover:underline">
          Projects
        </Link>
      </div>
      <div className="flex justify-center space-x-4">
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
  );
};

export default Home;


