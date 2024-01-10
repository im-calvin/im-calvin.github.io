import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function NETINT() {
  const NETINTGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="AI Developer @NETINT"
      titleLink="https://netint.com/"
      description="Lorem ipsum."
      implementation={["Lorem ipsum"]}
      key={"netint"}
      technologies={["Lorem ipsum"]}
      imgs={NETINTGallery}
    />
  );
}
