import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";
import { user } from "./data/User.js";

const Home = () => {
  const { first, second, third, four } = user.profession;
  const professions = [first, second, third, four];
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProfession((prevProfession) =>
        prevProfession + 1 === professions.length ? 0 : prevProfession + 1
      );
    }, 3000); // Change profession every 2 seconds

    return () => clearInterval(timer);
  });
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center font-sans">
      <img
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 border-4 border-blue-500"
        src={profileImage}
        alt={user.fullname}
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-2">{user.fullname}</h1>
      <h2 className="text-xl md:text-3xl font-semibold mb-2 text-blue-400">
        {professions[currentProfession]}
      </h2>
      <div className="flex space-x-4 mt-4">
        <Link
          to="/about"
          className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          Projects
        </Link>
      </div>
      <div className="mt-4">
        <Link
          to={user.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Download Resume
        </Link>
      </div>
      <div className="flex space-x-4 mt-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={user.github}
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={`mailto:${user.mail}`}
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={user.linkedin}
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
