import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const AnimateTitle = ({ title, comtainerClass }) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useEffect(() => {

    const context = gsap.context(() => {
      const animated_title = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "200 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      // simple animation: fade/slide words in with a small stagger
      animated_title.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        stagger: 0.05,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => context.revert();
  }, []);
    
  return (
    <div ref={containerRef} className={`animated-title ${comtainerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, wIndex) => (
            <span
              key={wIndex}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimateTitle;
