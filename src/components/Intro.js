import Typing from "../effects/Typing";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import MyResume from "../docs/AdeolaAdegoke-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin);

export default function Intro() {
    return (
     
        <section id="intro">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              <h2 className="font-heading text-9xl text-secondary-accent-color">
                ADEOLA
              </h2>
              <h1 className="text-6xl text-accent-color">
                <Typing />
              </h1>
              <br className="hidden lg:inline-block" />
              <p className="text-2xl mb-6  text-secondary-accent-color font-body">
                I like to create human-centered applications{" "}
                <br className="hidden lg:inline-block" />
                and deliver rich web experiences.
                <br className="hidden lg:inline-block" />
              </p>

              <div className="flex justify-center font-body">
                <a
                  href={MyResume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-secondary-accent-color border-2 border-accent-color py-2 px-6 focus:outline-none hover:bg-accent-color hover:text-main-color rounded text-lg"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/DeolaDev"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 inline-flex text-secondary-accent-color text-4xl border-0 py-2 px-6 focus:outline-none hover:text-accent-color"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adeola-a-adegoke/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-secondary-accent-color text-4xl border-0 py-2 focus:outline-none hover:text-accent-color"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </section>
      
    );
}
