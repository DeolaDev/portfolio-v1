import { LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../datafeed";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-32 mx-auto">
        <div className="text-center mb-20">
          <LightBulbIcon className="w-10 inline-block mb-4 text-accent-color" />
          <h1 className="font-heading sm:text-4xl text-3xl font-medium text-secondary-accent-color mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-navbar-color rounded flex p-4 h-full items-center">
                <CheckCircleIcon className="text-accent-color w-6 h-6 flex-shrink-0 mr-4" />
                <span className="font-heading font-medium text-secondary-accent-color">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
