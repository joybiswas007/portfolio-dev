import { Link } from "react-router-dom";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";

const About = () => {
  const aboutTitle = "About - Joy";

  return (
    <>
      <Title title={aboutTitle} />
      <article className="container mx-auto p-4 text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Section */}
          <section className="md:mr-8 mb-8 md:mb-0">
            <img
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full"
              draggable="false"
              src={profileImage}
              alt="Joy Biswas"
              title="Joy Biswas"
            />
            <p className="text-center mt-4">
              Hi there, I am Joy! Welcome to my personal Linux-powered space station.
            </p>
            <p className="text-center mt-4">
              I am Joy Biswas, always committed to my works and goals. I'm also a fast learner and passionate about implementing and launching new projects and ideas. I navigate through the Linux galaxy, exploring the command-line constellations and scripting nebulae. As a code astronaut, my mission is to bring software innovations back to Earth. I'm very fond of open-source software and always trying to find a way to contribute to them.
            </p>
          </section>

          {/* Right Section */}
          <section className="md:w-1/2">
            <p className="text-center md:text-left mt-4 md:mt-0">
              See my{" "}
              <Link to="/projects" className="text-blue-400 hover:underline">
                projects
              </Link>
            </p>

            <div className="text-center md:text-left mt-4">
              <h2 className="text-lg font-semibold mb-2">Social Links</h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/joybiswas007"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:joybiswas040701@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
