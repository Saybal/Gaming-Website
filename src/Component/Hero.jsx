import React, { useRef, useState } from "react";
import CommonBtn from "./CommonBtn";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [bgvideoIndex, setBgvideoIndex] = useState(1);

  const totalVideos = 4;
  const nextVideo = useRef(null);

  // GSAP Hooks and Functions
  useGSAP(
    () => {
      // console.log("before bgvideoIndex", bgvideoIndex);
      if (clicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideo.current.play();
          },
          onComplete: () => {
            setBgvideoIndex(currentIndex);
            setClicked(false);
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
        //
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  const videoSource = (index) => `/public/videos/hero-${index}.mp4`;

  const handleClick = () => {
    setClicked(true);
    setCurrentIndex((currentIndex % totalVideos) + 1);
  };

  const handleloadedvideo = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  // console.log("currentIndex", currentIndex);
  // console.log("bgvideoIndex", bgvideoIndex);

  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-3-75"
      >
        <div>
          <div className="group mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in group-hover:scale-100 group-hover:opacity-100"
            >
              <video
                src={videoSource(
                  currentIndex + 1 > totalVideos ? 1 : currentIndex + 1
                )}
                ref={nextVideo}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleloadedvideo}
              />
            </div>
          </div>
          <video
            ref={nextVideo}
            src={videoSource(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center absolute z-20 invisible size-64 object-cover object-center"
            onLoadedData={handleloadedvideo}
          />

          <video
            src={videoSource(bgvideoIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleloadedvideo}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-3-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-3-75">
              R<b>e</b>define
            </h1>
            <p className="mb-5 max-w-64 font-robert text-blue-4-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <CommonBtn
              id="watch-trailer"
              title="Watch-Trailer"
              leftIcon={<TiLocationArrow className="size-5" />}
              containerClass="bg-yellow-2-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
