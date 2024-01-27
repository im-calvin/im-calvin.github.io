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
      description="Developed SaaS platform for a Canadian environmental consulting firm to help improve customers' efficiency in calculating specific scenarios for environmental compliance."
      implementation={[
        "Advocated for Docker image deployment to deliver cloud service on Azure Serverless functions within a deadline of 2 weeks",
        "Spearheaded automated testing with Pytest and Bitbucket Pipelines with 80% code coverage",
        "Overhauled build and deployment process to Microsoft Azure",
        "Updated legacy code written in Fortran to Python",
        "Implemented several scientific algorithms to complete e-tools",
      ]}
      key={"cosona"}
      technologies={["Python", "Docker", "Azure", "Bitbucket"]}
      imgs={CosonaGallery}
    />
  );
}
