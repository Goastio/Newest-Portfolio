import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Nav from "./Nav";
import Projects from "./Projects";
import Contact from "./Contact";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
AOS.init();

function Main({ isActive, setIsActive }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Home");
    }
  }, [inView]);

  function scrollFunction() {
    let e = document.getElementById("about");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <>
      <div ref={ref} id="home" className="h-screen w-screen bg-[#1A1A1A]">
        <div className="text-white h-full flex justify-center items-center">
          <div className="">
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-3xl md:text-7xl py-4 text-center tracking-tight"
            >
              Hello, I'm <span className="text-[#FF4D5A]">Brandon</span>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="text-center text-2xl md:text-6xl font-light"
            >
              I'm a front-end developer
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="pt-12 text-center"
            >
              <button
                onClick={scrollFunction}
                className="text-[#FF4D5A] md:text-2xl border-2 border-[#FF4D5A] rounded-sm px-6 py-2 transition duration-200 hover:text-transparent bg-clip-text bg-gradient-to-br from-white via-[#ff6973] to-[#FF4D5A] hover:border-white"
              >
                View my work
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nav isActive={isActive} setIsActive={setIsActive} />
      <About isActive={isActive} setIsActive={setIsActive} />
      <Projects isActive={isActive} setIsActive={setIsActive} />
      <Contact isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}

export default Main;
