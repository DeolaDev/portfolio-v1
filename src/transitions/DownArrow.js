import React from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
export default function DownArrow() {
  return (
    <section id="down-arrow-transition">
      <div className="flex flex-col mb-20 text-accent-color bg-main-color px-5 py-5 mx-auto text-center lg:px-40">
        <a
          href="#about"
          style="position:absolute; top:-100px;"
          className="hover:text-secondary-accent-color"
        >
          <ArrowDownCircleIcon className="mx-auto inline-block w-10 mb-4" />
        </a>
      </div>
    </section>
  );
}


