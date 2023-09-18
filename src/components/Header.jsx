import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="/" accessKey="j" title="Joy (Alt + J)">Joy</a>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
