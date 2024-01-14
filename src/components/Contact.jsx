import React from "react";
import Title from "./Title";

const Contact = () => {
  const contactTitle = "Joy - Contact";

  return (
    <>
      <Title title={contactTitle} />
      <article className="container mx-auto p-4 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h1>
        <div>
          <section>
            <p className="mb-4">
              Feel free to reach out to me! You can contact me via email at{" "}
              <a
                href="mailto:joybiswas040701@gmail.com"
                className="text-blue-400 hover:underline"
              >
                joybiswas040701@gmail.com
              </a>
              .
            </p>
            <p className="mb-4">
              I am actively seeking job opportunities. If you have any job openings or if you'd like to discuss potential collaborations, please don't hesitate to send me a message.
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

export default Contact;
