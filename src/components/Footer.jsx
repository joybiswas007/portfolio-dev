import { user } from "./data/User";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} </p>
        <p className="text-sm mt-2">
          Made with <span className="text-red-500">&#9829;</span> by{" "}
          {user.fullname}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
