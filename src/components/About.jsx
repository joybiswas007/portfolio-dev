import { Link } from "react-router-dom";

const About = () => {
  return (
    <article>
      <header>
        <h1>About</h1>
      </header>
      <div>
        <img
          draggable=""
          src=""
          alt=""
          title=""
          height="150"
          width="150"
        />
        <p>Hi there, I am Joy! Welcome to my personal website.</p>
        <p>
          I am Joy Biswas, who is always committed to his works and goals. I am
          also a fast learner and passionate about implementing and launching
          new projects and ideas. I am also very fond of open-source software
          and always trying to find a way to contribute to them.{" "}
        </p>
        <p>
          See my{" "}
          <Link to="/projects">
            <u>projects</u>
          </Link>
        </p>
        <h2>Links</h2>
      </div>
    </article>
  );
};

export default About;
