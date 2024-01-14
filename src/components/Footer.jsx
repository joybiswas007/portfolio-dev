import { user } from "./data/User"
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto text-center">
        <div>
          <p>&copy;{year} - {user.fullname}</p>
          <p className="text-sm mt-2">
            Crafted with <span className="text-red-500">&#9829;</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
