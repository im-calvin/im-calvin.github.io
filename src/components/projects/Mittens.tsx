// mittens images
import MittensScheduling from "../../images/mittens/scheduling.png";
import MittensCICD from "../../images/mittens/cicd.png";
import MittensDB from "../../images/mittens/db.png";

import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function Mittens() {
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
      subtitle="How it works:"
    />
  );
}
