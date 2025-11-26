import React, { useRef } from "react";
import AnimateTitle from "./AnimateTitle";
import gsap from "gsap";
import Round_Corner from "./Round_Corner";
import CommonBtn from "./CommonBtn";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const { left, top, width, height } = element.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section
      id="story"
      className="relative z-2 bg-black min-h-dvh w-screen text-blue-2-50"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general mb-5 text-sm uppercase md:text-[10px]">
          The Multiversal IP World
        </p>

        <div className="relative size-full">
          <AnimateTitle
            title="The St<b>o</b>ry of<br />a hidden real<b>m</b>"
            comtainerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            id="#story"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="story-bg"
                  className="object-contain"
                />
              </div>
            </div>

            <Round_Corner />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 px-2 md:px-0 max-w-sm text-center font-circular text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <CommonBtn
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5 px-6 py-3 bg-blue-2-50"
            />
          </div>
              </div>
              
      </div>
    </section>
  );
};

export default Story;
