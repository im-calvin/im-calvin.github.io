import { Icon } from "@iconify/react";
import type { ImageMetadata } from "astro";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* needs to include:
- title
- company
- role
- visuals
- links to project (gh, demo, etc)
- description (resume bullet points)
- technologies used
*/
interface ProjectExpandedProps {
  title: string;
  technologies: string[];
  description: string;
  icons: Array<any>; // TODO make this a type
  titleLink?: string;
  className?: string;
  imgs: ImageMetadata[];
  imgLink?: string;
}

export default function ProjectExpanded({
  title,
  technologies,
  description,
  icons,
  titleLink,
  className,
  imgLink,
  imgs,
}: ProjectExpandedProps) {
  return (
    <>
      <div className={`${className}`}>
        {/* image */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={50}
          navigation={true}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          className="lg:w-96; flex items-center justify-center xl:w-4/5"
        >
          {imgs.map((img) => (
            <SwiperSlide className="">
              <img
                src={img.src}
                alt={`${title} preview`}
                className="max-h-60vh w-full object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* text */}
        <div className="relative z-10 flex flex-col md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-[-1]">
          {/* <a
            href={titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit flex-row transition duration-200 hover:text-moona-purple dark:hover:text-moona-yellow"
          >
            <span className="text-3xl">{title}</span>
            <span className="mx-1 inline-flex items-center transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
              <Icon icon="iconoir:arrow-tl" rotate={1} className="h-3 w-3" />
            </span>
          </a> */}
          <div className="my-5 flex flex-grow items-center justify-center">
            <p className=" dark:text-white  md:rounded-lg md:p-3 md:text-black md:shadow-gray-600">
              {description}
            </p>
          </div>
          <p className="flex flex-row flex-wrap">
            {technologies.map((technology, index) => (
              <span
                className="my-1 mr-5 rounded-2xl border border-moona-darkPurple bg-moona-purple/[0.3] px-4 py-1 dark:border-moona-white dark:bg-moona-lightPurple/[0.3]"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </p>
          <div className="my-5 flex flex-row">
            {icons.map((icon) => (
              <span className="mr-5 h-6 w-6 transition-colors hover:text-moona-purple dark:hover:text-moona-yellow">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
