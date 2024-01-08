import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";
import profileImage from "../assets/profile.png";

const Home = () => {
  const [currentRole, setCurrentRole] = useState("Backend Developer");
  
  useEffect(() => {
    const roles = ["Backend Developer", "Node.js Developer"];
    let index = 0;
    const intervalId = setInterval(() => {
      index = index === roles.length - 1 ? 0 : index + 1;
      setCurrentRole(roles[index]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 text-center">
          <img
            draggable="false"
            src={profileImage}
            alt="Joy Biswas"
            className="mx-auto h-24 w-24 rounded-full"
          />
          <h1 className="text-4xl font-bold mt-2">Joy Biswas</h1>
          <div className={`typing-effect ${currentRole && 'typing'}`}>{currentRole}</div>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="https://github.com/joybiswas007" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link to="mailto:joybiswas040701@gmail.com" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;