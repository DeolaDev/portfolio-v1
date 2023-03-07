import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <TypeAnimation
      sequence={["Web Developer.", 1000, "Programmer.", 1000, "Designer.", 500]}
      //style={{ fontsize: "1em", color: "#f5a2a2" }}
      wrapper="h1"
      repeat={Infinity}
    />
  );
}
