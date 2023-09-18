import { Link } from "react-router-dom";
import Title from "./Title";

const Projects = () => {
  const projectsTitle = "Joy - Projects";

  return (
    <>
      <Title title={projectsTitle} />
      <article>
        <header>
          <h1>Projects</h1>
        </header>
        <div>
          <p>Some projects I&rsquo;ve worked on</p>
          <ul>
            <li>
              <Link to="https://github.com/joybiswas007/MagnetSearchBot">
                MagnetSearchBot
              </Link>
              <p>
                A Telegram bot to fetch magnet links from public trackers using
                api.
              </p>
            </li>
            <li>
              <Link to="https://github.com/joybiswas007/node-midjourney-telegram-bot">
                node-midjourney-telegram-bot
              </Link>
              <p>
                A Telegram bot created in Node.js using the unofficial
                Midjourney Node.js client.
              </p>
            </li>
            <li>
              <Link to="https://github.com/joybiswas007/mini-php-projects">
                mini-php-projects
              </Link>
              <p>
                Some small PHP projects which I&rsquo;ve implemented after
                learning PHP & PHP OOP.
              </p>
            </li>
          </ul>
          <p>
            {" "}
            Checkout my &nbsp;
            <Link to="https://github.com/joybiswas007">Github</Link> &nbsp; for
            more projects
          </p>
        </div>
      </article>
    </>
  );
};

export default Projects;
