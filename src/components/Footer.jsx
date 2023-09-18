const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="user-title">
        <div data-text="JOY BISWAS" className="matrix">
          &copy;{year} - Joy Biswas
        </div>
      </span>
    </footer>
  );
};

export default Footer;
