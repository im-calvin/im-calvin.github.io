import ProjectPreview from "./ProjectPreview";
import ProjectExpanded from "./ProjectExpanded";
import GithubIcon from "./icons/GithubIcon";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ProjectSelector() {
  const [projectLoaded, setProjectLoaded] = useState<number>(0);
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <ProjectPreview
          title="title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          date="2021-10-10"
          onClick={() => setProjectLoaded(0)}
          selected={projectLoaded === 0}
        />
        <ProjectPreview
          title="title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          date="2021-10-10"
          onClick={() => setProjectLoaded(1)}
          selected={projectLoaded === 1}
        />
      </div>
      <div className="my-5 w-full border dark:border-moona-yellow" />
      <div className="">
        <ProjectExpanded
          title="3FA"
          description="A secure and scalable multi-factor authentication system including a
            client application, admin dashboard, and backend server. The
            implementation seen here implements a secure file storage system but
            the underlying authentication system could be used for any
            application."
          technologies={["React", "Javascript", "Electron"]}
          icons={[
            <GithubIcon
              href="https://github.com/Computing-Collective/3FA/"
              ariaLabel="Github"
              key="github"
            />,
            <a href="https://3fa.netlify.app/">
              <Icon icon="material-symbols:open-in-new" className="h-8 w-8" />
            </a>,
          ]}
        />
      </div>
    </>
  );
}
