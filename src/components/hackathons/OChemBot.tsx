import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function OChemBot() {
  const OChemBotGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="Organic Chemistry Bot - First Overall & Best Beginner Hack"
      titleLink="https://devpost.com/software/hack-to-school-project"
      description="Helped students learn organic chemistry IUPAC names in a fun and interactive way by having users compete with each other to name the compound first. We supported 4 different difficulties and had a global leaderboard to track the top users."
      implementation={[
        "Creating a ranking system for users to compete with each other using MongoDB and Mongoose",
        "Developing a Discord bot using Discord.py and Python",
        "Created an API using Express.js and Node.js to store and retrieve data from MongoDB",
      ]}
      key={"ochembot"}
      technologies={[
        "Javascript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Node.js",
        "Discord.py",
        "Python",
      ]}
      icons={[
        <a href="https://www.youtube.com/watch?v=CDrs3_NKIoU">
          <Icon icon="mdi:youtube" className="h-6 w-6" />
        </a>,
        <GithubIcon
          href="https://github.com/bxian03/HackToSchoolAPI22/tree/main"
          ariaLabel="Github"
          key="backend"
        />,
        <GithubIcon
          href="https://github.com/im-calvin/HackToSchoolBot22/tree/main"
          ariaLabel="Github"
          key="frontend"
        />,
      ]}
      imgs={OChemBotGallery}
    />
  );
}
