import Title from "./Title";
import { user } from "./data/User";

const Contact = () => {
  const contactTitle = "Contact Me";

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Title title={contactTitle} />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              {user.about.third}{" "}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form
              action={`mailto:${user.mail}`}
              method="post"
              encType="text/plain"
              className="flex flex-col space-y-4"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="bg-gray-800 text-white border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;