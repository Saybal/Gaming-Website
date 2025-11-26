import React from "react";
import CommonBtn from "./CommonBtn";

const ImageBox = ({ src, containeClass }) => {
  return (
    <div className={`${containeClass}`}>
      <img src={src} alt="" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="relative z-1 my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-2-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageBox
            src="/img/contact-1.webp"
            containeClass="contact-clip-path-1"
          />
          <ImageBox
            src="/img/contact-2.webp"
            containeClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageBox
            src="/img/swordman-partial.webp"
            containeClass="absolute md:scale-125"
          />
          <ImageBox
            src="/img/swordman.webp"
            containeClass="sword-man-clip-path md:scale-125"
          />
              </div>
              
              <div className="flex flex-col items-center text-center">
                  <p className="font-general text-[10px] uppercase">
                    Join Zentry
                  </p>
                  <p className="special-font mt-10 w-full font-zentry text-5xl md:text-[6rem] leading-[0.9]">Let's Build the <br /> era of <br /> gaming together
                  </p>

                  <CommonBtn title="Contact Us" containerClass="mt-10 px-7 py-3 cursor-pointer bg-blue-2-50"/>
              </div>
      </div>
    </div>
  );
};

export default Contact;
