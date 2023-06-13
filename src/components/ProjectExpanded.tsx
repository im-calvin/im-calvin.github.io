import GithubIcon from "./icons/GithubIcon";
import type IconInterface from "../utils/IconInterface";

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
}

export default function ProjectExpanded({
  title,
  technologies,
  description,
  icons,
}: ProjectExpandedProps) {
  return (
    <>
      <div className="relative md:grid md:grid-cols-2 md:gap-5">
        <div className="absolute z-20 p-5">
          <h1 className="text-3xl">{title}</h1>
          <p className="my-5">{description}</p>
          <p className="my-5">
            {technologies.map((technology, index) => (
              <div key={index}>{technology}</div>
            ))}
          </p>
          <div className="flex flex-row">
            {icons.map((icon) => (
              <div className="h-8 w-8">{icon}</div>
            ))}
          </div>
        </div>
        <div className="absolute z-10 h-full w-full bg-gray-600 opacity-50" />
        <a
          href="https://www.youtube.com/watch?v=EXM25gpxC9Y"
          rel="noopener noreferrer"
          target="_blank"
          className="relative z-0"
        >
          <img
            src="/3fa_preview.png"
            alt="3FA preview"
            className="left-0 top-0 h-full w-full object-cover"
          />
        </a>
      </div>
    </>
  );
}
