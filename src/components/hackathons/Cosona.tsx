import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function Cosona() {
  const CosonaGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="Cosona"
      titleLink="https://lablab.ai/event/cohere-coral-hackathon/gforce/cosona"
      description="Created a platform where users upload content to construct a unique persona that they can engage in conversation with. Potential applications could be teaching languages in an engaging way, combatting depression, or making customer service feel more personal."
      implementation={[
        "Converted user's documents into a persona using Cohere's Chat API",
        "Used Langchain to create context-aware responses to user input",
        "Grounded the persona with the uploaded content by using RAG",
        "Automated deployment using Docker and GitHub Actions to home server",
      ]}
      key={"cosona"}
      technologies={[
        "Cohere API",
        "Python",
        "Langchain",
        "RAG",
        "Flask",
        "Typescript",
        "Vercel",
        "GitHub Actions",
        "Docker",
      ]}
      imgs={CosonaGallery}
    />
  );
}
