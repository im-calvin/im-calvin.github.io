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
      description="Lorem ipsum."
      implementation={["Lorem ipsum"]}
      key={"aris"}
      technologies={["Lorem ipsum"]}
      imgs={ARISGallery}
    />
  );
}
