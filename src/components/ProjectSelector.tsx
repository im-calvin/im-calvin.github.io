import ProjectPreview from "./ProjectPreview";
import ProjectExpanded from "./ProjectExpanded";
import GithubIcon from "./icons/GithubIcon";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// mittens images
import MittensScheduling from "../images/mittens/scheduling.png";
import MittensCICD from "../images/mittens/cicd.png";
import MittensDB from "../images/mittens/db.png";

import { type GalleryImage } from "./ProjectExpanded";

// 3fa images
import ThreeFA1 from "../images/3fa/1.png";
import ThreeFA2 from "../images/3fa/2.png";
import ThreeFA3 from "../images/3fa/3.png";
import ThreeFA4 from "../images/3fa/4.jpg";
import ThreeFA5 from "../images/3fa/5.png";
import ThreeFA6 from "../images/3fa/6.png";

import "../styles/fade.css";

export default function ProjectSelector() {
  const [projectLoaded, setProjectLoaded] = useState<
    "3fa" | "mittens" | "aris" | "netint"
  >("3fa");

  const ThreeFAGallery: GalleryImage[] = [
    {
      img: ThreeFA1,
      title: "Login with camera capture",
    },
    {
      img: ThreeFA2,
      title: "Successful login to cloud storage",
    },
    {
      img: ThreeFA3,
      title: "Database schema",
    },
    {
      img: ThreeFA4,
      title: "Block diagram for communication between hardware and software",
    },
    {
      img: ThreeFA5,
      title: "Fritzing diagram for gesture recognition hardware",
    },
    {
      img: ThreeFA6,
      title: "Breadboard for hardware",
    },
  ];

  const MittensGallery: GalleryImage[] = [
    {
      img: MittensScheduling,
      title: "Scheduling",
    },
    {
      img: MittensCICD,
      title: "CI/CD pipeline",
    },
    {
      img: MittensDB,
      title: "Database schema",
    },
  ];

  const ARISGallery: GalleryImage[] = [];

  const NETINTGallery: GalleryImage[] = [];

  const renderSwitch = (projectLoaded: string) => {
    switch (projectLoaded) {
      case "3fa":
        return (
          <ProjectExpanded
            title="3FA"
            titleLink="https://www.youtube.com/watch?v=EXM25gpxC9Y"
            description="A 3-Factor-Authentication app that uses a combination of password, facial recognition, and gesture-based passwords to authenticate users to access their cloud storage platform."
            implementation={[
              "Users interact with the client app built in Electron, which captures gesture sequences via a Raspberry Pico and a picture via a webcam.",
              "The client app then sends the gesture sequences to the server, which recognizes motion in 7 axes using an accelerometer and gyroscope.",
              "The client app also sends the picture to the server, which uses a CNN to recognize the user's face.",
              "The server then sends a JWT token to the client app, which is used to authenticate the user for the duration of the session.",
            ]}
            technologies={[
              "React",
              "TailwindCSS",
              "Javascript",
              "Electron",
              "Python",
              "Flask",
              "PyTorch",
              "SQL",
              "Docker",
              "Raspberry Pi",
            ]}
            imgs={ThreeFAGallery}
            key={"3fa"}
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
              <a href="https://www.youtube.com/watch?v=EXM25gpxC9Y">
                <Icon icon="mdi:youtube" className="h-6 w-6" />
              </a>,
            ]}
          />
        );
      case "mittens":
        return (
          <ProjectExpanded
            title="Mittens"
            titleLink="https://github.com/im-calvin/Mittens/"
            description="A discord bot which allow users to subscribe to YouTube channels and receive notifications when they put up new schedules or go live. Also helps users talk to foreign friends by translating messages in real-time, and can explain the meaning of specific words or phrases."
            implementation={[
              "YouTube API to fetch the channel and video information",
              "Interacts with SQL database through TypeORM to store user subscriptions and the video schedules",
              "Jest for unit testing",
              "GitHub Actions CI/CD pipeline automated build/deploy",
              "Deployed on home-server using Docker",
              "Live alerts using Sentry APM",
              "Fully typed using Typescript",
            ]}
            key={"mittens"}
            technologies={["Typescript", "Node.js", "TypeORM", "SQL", "Docker"]}
            icons={[
              <GithubIcon
                href="https://github.com/im-calvin/Mittens/"
                ariaLabel="Github"
                key="github"
              />,
              <a href="https://youtu.be/KJ-t610SwIQ">
                <Icon icon="mdi:youtube" className="h-6 w-6" />
              </a>,
            ]}
            imgs={MittensGallery}
          />
        );
      case "aris":
        return (
          <ProjectExpanded
            title="ARIS"
            titleLink="https://arisenv.ca/"
            description="Lorem ipsum."
            implementation={["Lorem ipsum"]}
            key={"aris"}
            technologies={["Lorem ipsum"]}
            imgs={ARISGallery}
          />
        );
      case "netint":
        return (
          <ProjectExpanded
            title="NETINT"
            titleLink="https://netint.com/"
            description="Lorem ipsum."
            implementation={["Lorem ipsum"]}
            key={"netint"}
            technologies={["Lorem ipsum"]}
            imgs={NETINTGallery}
          />
        );
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
          title="Mittens"
          date="2022 / 07 - Present"
          onClick={() => setProjectLoaded("mittens")}
          selected={projectLoaded === "mittens"}
        />
        <ProjectPreview
          title="Software Developer @ ARIS"
          date="2023 / 05 - 2023 / 10"
          onClick={() => setProjectLoaded("aris")}
          selected={projectLoaded === "aris"}
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
