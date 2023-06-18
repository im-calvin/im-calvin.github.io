import ProjectPreview from "./ProjectPreview";
import ProjectExpanded from "./ProjectExpanded";
import GithubIcon from "./icons/GithubIcon";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { CSSTransition } from "react-transition-group";

export default function ProjectSelector() {
  const [projectLoaded, setProjectLoaded] = useState<number>(0);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 ">
        <ProjectPreview
          title="3FA"
          // description="A custom multi-factor authentication system for cloud storage."
          date="2023 / 03"
          onClick={() => setProjectLoaded(0)}
          selected={projectLoaded === 0}
        />
        <ProjectPreview
          title="Mittens"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          date="2022 / 07"
          onClick={() => setProjectLoaded(1)}
          selected={projectLoaded === 1}
        />
      </div>
      <div className="my-5 w-full border dark:border-moona-yellow" />
      <div className="relative">
        <CSSTransition
          in={projectLoaded === 0}
          timeout={300} // Adjust the duration to match the CSS transition duration
          classNames="fade"
          unmountOnExit
        >
          <ProjectExpanded
            title="3FA"
            titleLink="https://www.youtube.com/watch?v=EXM25gpxC9Y"
            description="A secure and scalable multi-factor authentication system including a
            client application, admin dashboard, and backend server. The
            implementation seen here implements a secure file storage system but
            the underlying authentication system could be used for any
            application."
            technologies={["React", "Javascript", "Electron"]}
            imgSrc="/3fa_preview.png"
            imgLink="https://www.youtube.com/watch?v=EXM25gpxC9Y"
            icons={[
              <GithubIcon
                href="https://github.com/Computing-Collective/3FA/"
                ariaLabel="Github"
                key="github"
              />,
              <a href="https://3fa.netlify.app/">
                <Icon icon="material-symbols:open-in-new" className="h-6 w-6" />
              </a>,
            ]}
            className={`transition-opacity duration-300 ease-out ${
              projectLoaded === 0 ? "opacity-100" : "opacity-0"
            } absolute left-0 top-0 w-full`}
          />
        </CSSTransition>
        <CSSTransition
          in={projectLoaded === 1}
          timeout={300} // Adjust the duration to match the CSS transition duration
          classNames="fade"
          unmountOnExit
        >
          <ProjectExpanded
            title="Mittens"
            titleLink="https://github.com/im-calvin/Mittens/"
            description="A discord bot used to allow users to subscribe certain YouTube channels and receive notifications when they put up new schedules and go live."
            technologies={["Typescript", "Node.js", "TypeORM", "SQL", "Docker"]}
            icons={[
              <GithubIcon
                href="https://github.com/im-calvin/Mittens/"
                ariaLabel="Github"
                key="github"
              />,
            ]}
            imgSrc="/mittens_preview.png"
            className={`transition-opacity duration-300 ease-out ${
              projectLoaded === 1 ? "opacity-100" : "opacity-0"
            } absolute left-0 top-0 w-full`}
          />
        </CSSTransition>
      </div>
    </>
  );
}
