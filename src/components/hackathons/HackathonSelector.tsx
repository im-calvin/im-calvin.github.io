import ProjectPreview from "../ProjectPreview";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../../styles/fade.css";

import Cosona from "./Cosona";
import OChemBot from "./OChemBot";
import BThere from "./BThere";

export default function ProjectSelector() {
  const [projectLoaded, setProjectLoaded] = useState<
    "bthere" | "cosona" | "ochembot"
  >("bthere");

  const renderSwitch = (projectLoaded: string) => {
    switch (projectLoaded) {
      case "bthere":
        return BThere;
      case "cosona":
        return Cosona;
      case "ochembot":
        return OChemBot;
      default:
        throw new Error("Invalid project loaded");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <ProjectPreview
          title="Second Place"
          date="nwHacks | 2024 / 01"
          onClick={() => setProjectLoaded("bthere")}
          selected={projectLoaded === "bthere"}
        />
        <ProjectPreview
          title="Spotlight Winner"
          date="Cohere Hackathon | 2023 / 11"
          onClick={() => setProjectLoaded("cosona")}
          selected={projectLoaded === "cosona"}
        />
        <ProjectPreview
          title="First Overall & Best Beginner Hack"
          date="Hack to School | 2022 / 09"
          onClick={() => setProjectLoaded("ochembot")}
          selected={projectLoaded === "ochembot"}
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
