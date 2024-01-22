import { Link } from "react-router-dom";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/profile.png";
import { user } from "./data/User";

const About = () => {
  const aboutTitle = "About - Joy";
  const { fullname, mail, github } = user;
  const { first, second } = user.about;

  return (
    <>
      <Title title={aboutTitle} />
      <article className="container mx-auto p-4 text-white mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Section */}
          <section className="md:mr-8 mb-8 md:mb-0">
            <img
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full"
              draggable="false"
              src={profileImage}
              alt={fullname}
              title={fullname}
            />
            <p className="text-center mt-4">{first}</p>
            <p className="text-center mt-4">{second}</p>
          </section>

          {/* Right Section */}
          <section className="md:w-1/2 overflow-auto">
            <p className="text-center md:text-left mt-4 md:mt-0">
              See my{" "}
              <Link to="/projects" className="text-blue-400 hover:underline">
                projects
              </Link>
            </p>

            <div className="text-center md:text-left mt-4">
              <h2 className="text-lg font-semibold mb-2">Social Links</h2>
              <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={github}
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`mailto:${mail}`}
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

