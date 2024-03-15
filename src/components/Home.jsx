import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";
import { user } from "./data/User.js";

const Home = () => {
  const { first, second, third, four } = user.profession;
  const professions = useMemo(
    () => [first, second, third, four],
    [first, second, third, four]
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === professions[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, professions]);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="animate-bounce">
        <img
          className="w-40 h-40 md:w-60 md:h-60 rounded-full mb-6 border-8 border-blue-600 shadow-lg"
          src={profileImage}
          alt={user.fullname}
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">{user.fullname}</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-500">
        {`${professions[index].substring(0, subIndex)}${reverse ? "" : "|"}`}
      </h2>
      <div className="flex space-x-6 mt-6">
        <Link
          to="/about"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out text-lg md:text-xl font-medium"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out text-lg md:text-xl font-medium"
        >
          Projects
        </Link>
      </div>
      <div className="mt-6">
        <Link
          to={user.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out"
        >
          Download Resume
        </Link>
      </div>
      <div className="flex space-x-6 mt-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={user.github}
          className="text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={`mailto:${user.mail}`}
          className="text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={user.linkedin}
          className="text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
