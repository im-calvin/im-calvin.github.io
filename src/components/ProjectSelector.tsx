import ProjectPreview from "./ProjectPreview";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../styles/fade.css";

import Mittens from "./projects/Mittens";
import ThreeFA from "./projects/ThreeFA";

export default function ProjectSelector() {
  const [projectLoaded, setProjectLoaded] = useState<"3fa" | "mittens">(
    "mittens"
  );

  const renderSwitch = (projectLoaded: string) => {
    switch (projectLoaded) {
      case "3fa":
        return ThreeFA;
      case "mittens":
        return Mittens;
      default:
        throw new Error("Invalid project loaded");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <ProjectPreview
          title="Mittens"
          date="2022 / 07 - Present"
          onClick={() => setProjectLoaded("mittens")}
          selected={projectLoaded === "mittens"}
        />
        <ProjectPreview
          title="3FA"
          date="2023 / 03"
          onClick={() => setProjectLoaded("3fa")}
          selected={projectLoaded === "3fa"}
        />
      </div>
      <div className="my-5 w-full border border-anya-darkPurple dark:border-moona-yellow" />
      <div className="relative">
        <TransitionGroup>
          <CSSTransition
            key={projectLoaded}
            timeout={300} // Adjust the duration to match the CSS transition duration
            classNames="fade"
            unmountOnExit
          >
            {renderSwitch(projectLoaded)}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}
