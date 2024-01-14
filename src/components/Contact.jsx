import { Link } from "react-router-dom";
import Title from "./Title";
import { user } from "./data/User";

const Contact = () => {
  const contactTitle = "Joy - Contact";
  const { mail } = user;
  const { third } = user.about;
  return (
    <>
      <Title title={contactTitle} />
      <article className="container mx-auto p-4 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h1>
        <div>
          <section>
            <p className="mb-4">
              Feel free to reach out to me! You can contact me via email at{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={`mailto:${mail}`}
                className="text-blue-400 hover:underline"
              >
                {mail}
              </Link>
              .
            </p>
            <p className="mb-4">
              {third}
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

export default Contact;
