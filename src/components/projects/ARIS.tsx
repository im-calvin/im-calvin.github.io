import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function ARIS() {
  const ARISGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="ARIS"
      titleLink="https://arisenv.ca/"
      description="Developed SaaS platform for a Canadian environmental consulting firm to help improve customers' efficiency in calculating specific scenarios for environmental compliance."
      implementation={[
        "Dockerized the application to streamline development and deployment processes",
        "Spearheaded automated testing with Pytest and Bitbucket Pipelines with 80% code coverage",
        "Overhauled build and deployment process to Microsoft Azure",
        "Updated legacy code written in Fortran to Python",
        "Implemented several scientific algorithms to complete e-tools",
      ]}
      key={"aris"}
      technologies={["Python", "Docker", "Azure", "Bitbucket"]}
      imgs={ARISGallery}
      subtitle="Notable Achievements:"
    />
  );
}
