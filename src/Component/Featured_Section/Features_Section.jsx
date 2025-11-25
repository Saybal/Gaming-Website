import React from "react";
import Featured_Card from "./Featured_Card";
import { TiLocationArrow } from "react-icons/ti";

export const featured_card_Data = [
  {
    id: 1,
    src: "videos/feature-1.mp4",
    title: (
      <>
        radia<b>n</b>t
      </>
    ),
    description:
      "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
    isComingSoon: true,
    wrapperClass:
      "border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]",
    type: "card",
  },
  {
    id: 2,
    src: "videos/feature-2.mp4",
    title: (
      <>
        zig<b>m</b>a
      </>
    ),
    description:
      "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    isComingSoon: true,
    wrapperClass: "bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2",
    type: "card",
  },
  {
    id: 3,
    src: "videos/feature-3.mp4",
    title: (
      <>
        n<b>e</b>xus
      </>
    ),
    description:
      "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    isComingSoon: true,
    wrapperClass: "bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0",
    type: "card",
  },
  {
    id: 4,
    src: "videos/feature-4.mp4",
    title: (
      <>
        az<b>u</b>l
      </>
    ),
    description:
      "A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
    isComingSoon: true,
    wrapperClass: "bento-tilt_1 me-14 md:col-span-1 md:me-0",
    type: "card",
  },
  {
    id: 5,
    type: "textBox",
    wrapperClass: "bento-tilt_2",
    content: (
      <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
        <h1 className="bento-title special-font max-w-64 text-black">
          M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
        </h1>
        <TiLocationArrow className="m-5 scale-[5] self-end" />
      </div>
    ),
  },
  {
    id: 6,
    type: "videoBox",
    wrapperClass: "bento-tilt_2",
    videoSrc: "videos/feature-5.mp4",
  },
];

const Features_Section = () => {
  return (
    <section className="bg-black pb-52">
      <div className="max-auto container px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-2-50">
            Into the MetaGame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-2-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className={featured_card_Data[0].wrapperClass}>
          <Featured_Card
            src={featured_card_Data[0].src}
            title={featured_card_Data[0].title}
            description={featured_card_Data[0].description}
            isComingSoon={featured_card_Data[0].isComingSoon}
          />
        </div>

        {/* Grid UI */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          {featured_card_Data.slice(1).map((item) => (
            <div key={item.id} className={item.wrapperClass}>
              {item.type === "card" && (
                <Featured_Card
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  isComingSoon={item.isComingSoon}
                />
              )}

              {item.type === "textBox" && item.content}

              {item.type === "videoBox" && (
                <video
                  src={item.videoSrc}
                  loop
                  muted
                  autoPlay
                  className="size-full object-cover object-center"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_Section;
