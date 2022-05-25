import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SARU"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5095040,
      }}
    />
  );
}

export default Type;