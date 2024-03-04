import { Link } from "react-router-dom";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";
import { user } from "./data/User";
import { skills } from "./data/Skills";

const About = () => {
  const aboutTitle = "About Me";

  return (
    <div className="bg-gray-800 text-gray-300 min-h-screen font-sans">
      <Title title={aboutTitle} />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <img
              className="w-48 h-48 mx-auto rounded-full border-4 border-gray-300"
              src={profileImage}
              alt={user.fullname}
              title={user.fullname}
            />
            <p className="text-center mt-4 font-semibold text-lg">{user.fullname}</p>
            <p className="text-center mt-2">{user.about.first}</p>
            <p className="text-center mt-2">{user.about.second}</p>
          </div>

          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to={user.github} className="hover:text-white">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link to={`mailto:${user.mail}`} className="hover:text-white">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link to={user.linkedin} className="hover:text-white">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <skill.icon className="text-6xl mx-auto" />
                    <span className="block mt-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;