import { Link } from "react-router-dom";
import Title from "./Title";
import { lists } from "./Lists";

const Projects = () => {
  const projectsTitle = "Joy - Projects";
  return (
    <>
      <Title title={projectsTitle} />
      <article className="min-h-screen bg-gray-900 text-white flex flex-col">
        <h1 className="text-center text-3xl font-bold">Projects</h1>
        <div className="flex-grow container mx-auto p-8">
          <section className="mb-6">
            <p>Some projects I&lsquo;ve worked on:</p>
            <ul className="list-disc pl-5">
              {lists.map((list, index) => {
                return (
                  <li key={index}>
                    <Link to={list.link} className="text-blue-500 underline">
                      {list.name}
                    </Link>
                    <p>{list.description}</p>
                  </li>
                );
              })}
            </ul>
            <p>
              Checkout my{" "}
              <Link
                to="https://github.com/joybiswas007?tab=repositories"
                className="text-blue-500 underline"
              >
                Github
              </Link>{" "}
              for more projects.
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

export default Projects;
