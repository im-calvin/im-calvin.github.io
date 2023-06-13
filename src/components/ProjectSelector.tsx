import ProjectPreview from "./ProjectPreview";
import ProjectExpanded from "./ProjectExpanded";
import { useState } from "react";

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
        <ProjectExpanded />
      </div>
    </>
  );
}
