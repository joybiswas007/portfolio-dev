import { Link } from "react-router-dom";
import Title from "./Title";
import { lists } from "./Lists";

const Projects = () => {
  const projectsTitle = "Joy - Projects";

  return (
    <>
      <Title title={projectsTitle} />
      <article className="container mx-auto p-4 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Projects</h1>
        <div>
          <section>
            <p className="mb-4">Here are some projects I've worked on:</p>
            <ul className="list-disc ml-6 mb-4">
              {lists.map((list, index) => (
                <li key={index} className="mb-2">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={list.link}
                    className="text-blue-400 hover:underline"
                  >
                    {list.name}
                  </Link>
                  <p className="text-gray-400 ml-2">{list.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Check out more projects on my{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/joybiswas007?tab=repositories"
                className="text-blue-400 hover:underline"
              >
                Github
              </Link>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

export default Projects;
