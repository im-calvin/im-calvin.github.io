import ProjectPreview from "./ProjectPreview";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../styles/fade.css";

import ARIS from "./projects/ARIS";
import NETINT from "./projects/NETINT";

export default function ExperienceSelector() {
  const [projectLoaded, setProjectLoaded] = useState<"aris" | "netint">(
    "netint"
  );

  const renderSwitch = (projectLoaded: string) => {
    switch (projectLoaded) {
      case "aris":
        return ARIS;
      case "netint":
        return NETINT;
      default:
        throw new Error("Invalid project loaded");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <ProjectPreview
          title="AI Developer @NETINT"
          date="2024 / 01 - Present"
          onClick={() => setProjectLoaded("netint")}
          selected={projectLoaded === "netint"}
        />
        <ProjectPreview
          title="Software Developer @ ARIS"
          date="2023 / 05 - 2023 / 10"
          onClick={() => setProjectLoaded("aris")}
          selected={projectLoaded === "aris"}
        />
      </div>
      <div className="my-5 w-full border border-anya-darkPurple dark:border-moona-yellow" />
      <div className="relative">
        <TransitionGroup>
          <CSSTransition
            key={projectLoaded}
            timeout={300} // Adjust the duration to match the CSS transition duration
            classNames="fade"
          >
            {renderSwitch(projectLoaded)}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}
