import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="text-gray-400 bg-secondary-accent-color body-font"
    >
      <div className="container mx-auto flex flex-col mb-32 py-32 text-center text-main-color">
        <h1 className="font-heading title-font text-4xl mb-6 font-medium underline underline-offset-8 decoration-4 decoration-accent-color">
          Hi, I'm Adeola. Nice to meet you.
        </h1>
        <p className="mb-8 leading-relaxed text-lg font-body">
          Have you heard the saying 'do what you love and you’ll never work a
          day in your life'?
          <br />
          For me, that means writing and transforming ideas into beautiful
          digital experiences.
        </p>
        <p className="mb-8 leading-relaxed text-lg font-body">
          I hold a Computer Science degree with a minor in Psychology, <br />
          driven by my passion to find the perfect balance between technology
          and our human experiences.
          <br /> My strength lies in my ability to blend logic with heart,
          approaching every challenge
          <br />
          with empathy and understanding.
        </p>
        <p className="mb-8 leading-relaxed text-lg font-body">
          I enjoy creating solutions that prioritize user experience because{" "}
          <br />I believe that technology should simplify and enhance our lives,
          not add to the complexities. 
        </p>
        <p className="mb-8 leading-relaxed text-lg font-body">
          My goal is to leave a positive impact on
          the world through my words and my technological contributions. <br/>I am
          naturally inquisitive and continuously refining my skills, one
          keystroke at a time. <br/>Let's create something beautiful together.
        </p>
      </div>
    </section>
  );
}
