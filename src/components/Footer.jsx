const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 py-2">
      <div className="container mx-auto px-4 text-center">
        <div>
          &copy;{year} - Joy Biswas
        </div>
      </div>
    </footer>
  );
};

export default Footer;