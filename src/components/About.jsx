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
      <article className="min-h-screen bg-gray-900 text-white flex flex-col">
        <h1 className="text-center text-3xl font-bold">About</h1>
        <div className="flex-grow container mx-auto p-8">
          <section className="mb-6">
            <img
              draggable="false"
              src={profileImage}
              alt="Joy Biswas"
              title="Joy Biswas"
              className="mx-auto h-32 w-32 rounded-full"
            />
            <p className="mt-4 text-lg">
              Hi there, I am Joy! Welcome to my personal website.
            </p>
            <p className="mt-2">
              I am Joy Biswas, who is always committed to his works and goals. I
              am also a fast learner and passionate about implementing and
              launching new projects and ideas. I am very fond of open-source
              software and always trying to find a way to contribute to them.
            </p>
          </section>
          <section className="mb-6">
            <p>
              See my{" "}
              <Link to="/projects" className="text-blue-500 underline">
                projects
              </Link>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Social Links
            </h2>
            <div className="flex justify-center gap-4">
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
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
