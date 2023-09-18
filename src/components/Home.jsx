import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="profile">
        <div className="inner-profile">
        <img draggable="false" src="" alt="" title="" height="150" width="150" />
          <h1>Joy Biswas</h1>
          <span>Backend Developer</span>
          <div className="buttons">
            <a className="button" href="/about">
              <span>About</span>
            </a>
            <a className="button" href="/projects">
              <span>Projects</span>
            </a>
          </div>
          <div className="social-icons">
            <Link to="https://github.com/joybiswas007">Github</Link>
            <Link to="mailto:joybiswas040701@gmail.com">Mail</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
