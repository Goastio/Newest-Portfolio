import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blackjack from "../images/blackjack_pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Wrapper from "../wrappers/Wrapper";
AOS.init();

function Projects({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Projects");
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        id="projects"
        className="h-[60vh] md:h-[150vh] w-full bg-[#1A1A1A] text-white pt-[69px]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl h-1/6 w-full flex items-center justify-center font-bold tracking-tight"
        >
          Projects
        </div>

        <Wrapper>
          <div className="flex justify-center">
            <div
              data-aos="fade-left"
              className="md:text-xl mr-4 md:mr-16 flex items-center justify-center font-medium"
            >
              Blackjack App
            </div>
            <div className="w-3/5 hover:scale-95 transition duration-100">
              <a href="/blackjack">
                <img data-aos="fade-right" src={blackjack} className="" />
              </a>
            </div>
          </div>

          <div className="flex justify-center py-4">
            <div className="w-3/5 hover:scale-95 transition duration-100">
              <a href="/blackjack">
                <img data-aos="fade-left" src={blackjack} />
              </a>
            </div>
            <div
              data-aos="fade-right"
              className="md:text-xl ml-4 md:mr-16 flex items-center justify-center font-medium"
            >
              COMING SOON
            </div>
          </div>

          <div className="flex justify-center">
            <div
              data-aos="fade-left"
              className="md:text-xl mr-4 md:mr-16 flex items-center justify-center font-medium"
            >
              COMING SOON
            </div>
            <div className="w-3/5 hover:scale-95 transition duration-100">
              <a href="/blackjack">
                <img data-aos="fade-right" src={blackjack} />
              </a>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Projects;
