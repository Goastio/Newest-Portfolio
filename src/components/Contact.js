import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Contact");
    }
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        id="contact"
        className="min-h-[100vh] w-full bg-[#1A1A1A] text-white pt-[69px] md:pt-96"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl h-1/4 w-full flex items-center justify-center font-bold tracking-tight"
        >
          Contact
        </div>
      </div>
    </>
  );
}

export default Contact;
