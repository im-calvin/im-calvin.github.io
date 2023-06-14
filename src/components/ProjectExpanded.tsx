import { Icon } from "@iconify/react";

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
}

export default function ProjectExpanded({
  title,
  technologies,
  description,
  icons,
  titleLink,
}: ProjectExpandedProps) {
  return (
    <>
      <div className="relative md:grid md:grid-cols-12 md:gap-5">
        {/* <div className="absolute z-10 h-full w-full bg-gray-600 opacity-50" /> */}
        <div className="hidden text-right md:z-0 md:col-start-6 md:col-end-[-1] md:row-start-1 md:row-end-[-1] md:mt-20 md:block">
          <a
            href="https://www.youtube.com/watch?v=EXM25gpxC9Y"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="/3fa_preview.png"
              alt="3FA preview"
              className="left-0 top-0 rounded-xl object-cover brightness-50 grayscale"
            />
          </a>
        </div>
        <div className="relative z-10 p-5 md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-[-1]">
          <a
            href={titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit flex-row transition duration-200 dark:hover:text-moona-yellow"
          >
            <span className="text-3xl">{title}</span>
            <span className="mx-1 inline-flex items-center transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
              <Icon icon="iconoir:arrow-tl" rotate={1} className="h-3 w-3" />
            </span>
          </a>
          <p className="my-5">{description}</p>
          <p className="my-5 flex flex-row">
            {technologies.map((technology, index) => (
              <span
                className="mr-5 rounded-2xl px-4 py-1 dark:border-moona-white dark:bg-moona-lightPurple/[0.3]"
                key={index}
              >
                {technology}
              </span>
            ))}
          </p>
          <div className="flex flex-row">
            {icons.map((icon) => (
              <span className="mr-5 h-6 w-6 transition-colors dark:hover:text-moona-yellow">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
