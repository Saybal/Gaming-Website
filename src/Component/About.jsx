import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import AnimateTitle from "./AnimateTitle";

function About() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const ClipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        });

        ClipAnimation.to('.mask-clip-path', {
            width: '100%',
            height: '100%',
            borderRadius: 0,
        })
    })
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general uppercase text-sm md:text-[10px]">
          Welcome to the Metagame Layer
              </h2>

              <AnimateTitle title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared Adventure" comtainerClass="mt-5 text-center text-4xl !text-black uppercase leading-[0.8] md:text-[6rem]"/>
              
        
        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countries games and platforms</p>
        </div>
          </div>
          <div id="clip" className="h-dvh w-screen">
              <div className="mask-clip-path about-image">
                  <img
                    src="/img/about.webp"
                      alt="about background"
                      className="absolute left-0 top-0 size-full object-cover"
                  />
              </div>
          </div>
    </div>
  );
}

export default About;
