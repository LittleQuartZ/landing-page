import { type ContentsData } from "../../App";
import ListItem from "./ListItem";
import StatItem from "./StatItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

type Props = {
  content: ContentsData;
};

const Content = ({ content }: Props) => {
  return (
    <div className="even:bg-slate-100 py-4">
      <article key={content.title} className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">{content.title}</h1>

        <section className="flex flex-col md:flex-row justify-center gap-2">
          <div className="basis-1/2">
            {content.text &&
              content.text.split("\n").map((text, index) => (
                <p key={index} className="px-4 first:mt-6 mt-6 text-lg">
                  {text}
                </p>
              ))}
          </div>

          {content.embed &&
            content.embed.map(
              (embed) =>
                embed.youtube && (
                  <iframe
                    className="w-full md:w-1/2 mt-4 md:mt-0 h-[440px] block"
                    src={embed.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
            )}
        </section>

        {content.lists && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
            {content.lists.map((listItem) => (
              <ListItem listItem={listItem} />
            ))}
          </div>
        )}

        {content.stats && (
          <div className="grid-cols-2 md:grid-cols-3 grid gap-y-2">
            {content.stats.map((stat) => (
              <StatItem stat={stat} />
            ))}
          </div>
        )}

        {content.images && (
          <div>
            <Swiper
              modules={[Autoplay]}
              autoplay={
                window.innerWidth < 720
                  ? { delay: 0.1, disableOnInteraction: false }
                  : false
              }
              slidesPerView={window.innerWidth < 720 ? 3 : 6}
              loop
              speed={3000}
            >
              {content.images.map((image) => (
                <SwiperSlide className="py-8 px-4">
                  <img src={image} className="w-36 h-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </article>
    </div>
  );
};

export default Content;
