import React, { useEffect, useState } from "react";
import Featured_Card from "./Featured_Card";
import { TiLocationArrow } from "react-icons/ti";
import axios from "axios";
import Tilted_Card from "./Tilted_Card";

const Features_Section = () => {
  const [featured_card_Data, setfeatured_card_Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/Json/Featured_Card_Data.json")
      .then((response) => {
        // console.log(response);
        setfeatured_card_Data(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured card data:", error);
      });
  }, []);

  // console.log(featured_card_Data);

  const formatTitle = (t) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: t }}
    />
  );
};


  const TextBox = ({content}) => {
    return (
      
      <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
        <h1 className="bento-title special-font max-w-64 text-black">
          {formatTitle(content)}
        </h1>
        <TiLocationArrow className="m-5 scale-[5] self-end" />
      </div>
  
    );
  }
  if (isLoading) return null;

  return (
    <section className="bg-black relative z-1 pb-52">
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

        <Tilted_Card className={featured_card_Data[0].wrapperClass}>
          <Featured_Card
            src={featured_card_Data[0].src}
            title={(formatTitle(featured_card_Data[0].title))}
            description={featured_card_Data[0].description}
            isComingSoon={featured_card_Data[0].isComingSoon}
          />
        </Tilted_Card>

        {/* Grid UI */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          {featured_card_Data.slice(1).map((item) => (
            <Tilted_Card key={item.id} className={item.wrapperClass}>
              {item.type === "card" && (
                <Featured_Card
                  src={item.src}
                  title={formatTitle(item.title)}
                  description={item.description}
                  isComingSoon={item.isComingSoon}
                />
              )}

              {item.type === "textBox" && <TextBox content={item.content} />}

              {item.type === "videoBox" && (
                <video
                  src={item.videoSrc}
                  loop
                  muted
                  autoPlay
                  className="size-full object-cover object-center"
                />
              )}
            </Tilted_Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_Section;
