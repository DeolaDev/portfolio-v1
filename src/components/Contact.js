import React from "react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  /* Function to process form submission */
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        message,
      }),
    })
      .then(() => alert("Sent. Thank you for your message"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div className="container py-32 mx-auto text-center lg:px-40  ">
        <div className="flex flex-col w-full mb-20">
          <ChatBubbleBottomCenterIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium font-heading text-secondary-accent-color mb-4">
            I'd love to chat ...
          </h1>

          {/* Using Netlify forms: Add netlify tag*/}
          {/* Trigger the handleSubmit function when user clicks on the submit button */}
          <form
            netlify
            name="contact"
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto text-center  w-2/3 mt-8"
          >
            {/*hidden input required for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="text-lg font-body text-accent-color"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-navbar-color rounded border border-secondary-accent-color focus:border-accent-color text-base outline-none text-secondary-accent-color py-1 px-3 leading-8"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-lg font-body text-accent-color"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-navbar-color rounded border border-secondary-accent-color focus:border-accent-color text-base outline-none text-secondary-accent-color py-1 px-3 leading-8"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-lg font-body text-accent-color"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-navbar-color rounded border border-secondary-accent-color focus:border-accent-color text-base outline-none text-secondary-accent-color py-1 px-3 leading-8"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-secondary-accent-color border-2 border-accent-color py-2 px-6 focus:outline-none bg-accent-color hover:bg-main-color hover:text-accent-color rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
