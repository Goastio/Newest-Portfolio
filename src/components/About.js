import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Wrapper from "../wrappers/Wrapper";
import unDraw from "../images/unDraw.svg";

AOS.init();

function About({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("About");
    }
  }, [inView]);

  return (
    <>
      <div className="min-h-[100vh]">
        <div
          ref={ref}
          id="about"
          className="h-screen w-full bg-[#1A1A1A] text-white"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl h-1/4 w-full flex items-center justify-center font-bold tracking-tight"
          >
            About
          </div>
          <Wrapper>
            <div className="md:grid md:grid-row-2 md:h-full">
              <div className="md:grid md:grid-cols-2 h-full">
                <div className="flex justify-center items-center"><img src={unDraw} className="w-1/2" /></div>
                <div className="md:text-xl md:leading-9">
                  Originally born and raised just outside of north-west Chicago,
                  IL. Currently residing just south of Tampa, FL. I've always
                  admired technology and envied code growing up but never got
                  around to learning it. Now that I have actually put forth the
                  effort to learn I have quickly fallen in love with web
                  development. I am excited for my journey in this industry and
                  I look forward to a life-long career in this profession. I
                  love the fact I can create websites and fully functioning web
                  applications with words. I look forward to furthering my
                  knowledge and experience in this profession from A-Z. My goal
                  is to be well versed in front-end and back-end.
                </div>
              </div>

            <div className="icons flex gap-8 justify-center items-center py-4">
                <div data-aos="fade-right" data-aos-delay="100" className="">
                  <img
                    className="h-[75px] md:h-[150px] hover:scale-105 active:scale-100 transition cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="">
                  <img
                    className="h-[75px] md:h-[150px] hover:scale-105 active:scale-100 transition cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                  />
                </div>

                <div data-aos="fade-down" data-aos-delay="300" className="">
                  <img
                    className="h-[75px] md:h-[150px] hover:scale-105 active:scale-100 transition cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="">
                  <img
                    className="h-[75px] md:h-[150px] hover:scale-105 active:scale-100 transition cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="500" className="">
                  <img
                    className="h-[75px] md:h-[150px] hover:scale-105 active:scale-100 transition cursor-pointer"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default About;
