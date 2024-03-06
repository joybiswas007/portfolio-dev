import { Link } from "react-router-dom";
import Title from "./Title";
import { lists } from "./data/Lists";
import { user } from "./data/User.js";

const Projects = () => {
  const projectsTitle = "Joy - Projects";

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Title title={projectsTitle} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lists.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  No Image Available
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{project.name}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:underline"
          >
            View More Projects on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
