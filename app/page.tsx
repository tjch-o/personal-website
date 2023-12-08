"use client";
import React, { useEffect, useRef } from "react";
import NavBar from "@/components/navigation bar/NavBar";
import Image from "next/image";
import TechStack from "@/components/home/TechStack";
import Typed from "typed.js";

function Home() {
  const sentences = ["I aspire to be a", "I aspire to be a", "I am a"];

  const wordsWithStyle = ["software engineer.", "full stack web developer.", "problem solver."];

  const element = useRef(null);

  useEffect(() => {
    const options = {
      strings: sentences.map(
        (sentence, index) =>
          `${sentence} <span class="text-white font-bold"> ${wordsWithStyle[index]}</span>`
      ),
      typeSpeed: 40,
      fadeOut: true,
      fadeDelay: 200,
      loop: true,
    };

    const typed = new Typed(element.current, options);

    return () => {
      // prevent memory leak on unmount
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen overflow-auto bg-aq-blue">
      <NavBar />
      <div className="flex justify-center p-16 bg-aq-blue">
        <div className="flex items-center space-x-16">
          <div className="text-left min-w-max">
            <h1 className="text-4xl font-bold">
              Hey, I&apos;m <span className="text-white font-bold">Tze Jie.</span>
            </h1>
            <h1 className="text-4xl">
              {" "}
              <span ref={element} />{" "}
            </h1>

            <p className="text-2xl mt-4 text-cyan-400">
              {" "}
              I am currently a Year 2 Computer Science student at NUS.
            </p>
            <p className="text-2xl text-cyan-400">
              {" "}
              I am passionate about programming and learning new technologies.
            </p>
          </div>
          <Image
            src="/tjch-o.png"
            alt="Me"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <TechStack />
    </div>
  );
}

export default Home;
