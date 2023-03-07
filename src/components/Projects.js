import { CommandLineIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../datafeed";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-navbar-color body-font">
      <div className="container py-32 mx-auto text-center lg:px-40  ">
        <div className="flex flex-col w-full mb-20">
          <CommandLineIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium font-heading text-secondary-accent-color mb-4">
            Some Projects I've Worked On...
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-body font-medium text-accent-color">
            Hover to read project details
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Loop through the 'projects' array in the datafeed.js file */}
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                {/*Using the responsive Card component to dislay each project */}
                <Card className="bg-navbar-color border-2 border-secondary-accent-color">
                  <CardHeader floated={false} className="h-80">
                    <img
                      alt="gallery"
                      className="absolute w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 h-full w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 className="title-font text-lg font-medium text-secondary-accent-color mb-3">
                        {project.title}
                      </h1>
                      <h2 className="tracking-widest text-sm font-body font-medium text-accent-color mb-1">
                        {project.toolstack}
                      </h2>

                      <p className="leading-relaxed text-secondary-accent-color">
                        {project.description}
                      </p>
                    </div>
                  </CardHeader>

                  <CardBody className="text-center mt-4 mb-4">
                    <a
                      href={project.link}
                      className="mb-2 font-medium font-body text-accent-color hover:text-secondary-accent-color underline underline-offset-8 decoration-1 decoration-secondary-accent-color hover:decoration-accent-color mr-10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.github}
                      className="mb-2 font-medium font-body text-accent-color hover:text-secondary-accent-color underline underline-offset-8 decoration-1 decoration-secondary-accent-color hover:decoration-accent-color ml-10 inline-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </CardBody>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
