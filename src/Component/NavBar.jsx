import React, { use, useEffect, useRef, useState } from "react";
import CommonBtn from "./CommonBtn";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
const Bars = [1, 2, 3, 4];
gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const navRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIndicatorsActive, setIsIndicatorsActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isvisibleNav, setIsVisibleNav] = useState(true);

  const { y: scrollY } = useWindowScroll();

  // UseEffect to handle nav background on scroll
  useEffect(() => {
    if (scrollY === 0) {
      navRef.current.classList.remove("floating-nav");
    } else if (scrollY > lastScrollY) {
      // scroll down
      navRef.current.classList.add("floating-nav");
      setIsVisibleNav(false);
    } else if (scrollY < lastScrollY) {
      // scroll up
      navRef.current.classList.add("floating-nav");
      setIsVisibleNav(true);
    }

    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

    // UseEffect to handle nav show/hide on scroll
  useEffect(() => {
    gsap.to(navRef.current, {
      y: isvisibleNav ? 0 : -100,
      opacity: isvisibleNav ? 1 : 0,
      duration: 0.1,
      ease: "sine.inOut",
    });
  }, [isvisibleNav]);

  // UseEffect to handle audio play/pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

    const handleScroll = (sectionId) => {
        gsap.to(window, {
            scrollTo: { y: `#${sectionId}`, offsetY: 70 },
            duration: 1.2,
            ease: "power3.out",
        })
    }
    // Toggle Audio Function
  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
    setIsIndicatorsActive((prev) => !prev);
  };

  return (
    <div
      ref={navRef}
      className={`fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6`}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <CommonBtn
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-2-50 px-7 py-3 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* RIght Side */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudio}
              className="ml-10 flex items-center p-0.5 justify-center space-x-0.5 w-4 h-4 md:w-8 md:h-8  bg-white/20 rounded-sm md:rounded-lg cursor-pointer border border-white/30 hover:bg-white/30 transition-all duration-300 overflow-hidden"
            >
              <audio
                ref={audioRef}
                // className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {Bars.map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorsActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
