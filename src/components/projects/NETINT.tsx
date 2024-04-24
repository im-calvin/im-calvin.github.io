import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function NETINT() {
  const NETINTGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="NETINT"
      titleLink="https://netint.com/"
      description="Working on internal tools to improve developer efficiency through generative AI."
      implementation={[
        "Developed comprehensive documentation for self-hosting open source project Chatbot-UI integrated with a self-hosted Supabase/Postgres database",
        "Built, deployed, presented, and trained employees on internal productivity tools",
        "Worked with team leads to understand core needs and implement specific tools to improve efficiency",
        "Implemented OAuth with Microsoft Entra for single sign-on, significantly reducing user sign-up friction",
        "Developed a scalable proxy for managing API keys, featuring usage logging, cost tracking, and automatic key deactivation",
        "Created a sandbox management platform for secure code execution in isolated Docker environments",
        "Developed a web app allowing users to upload, script, and execute code directly from the browser",
      ]}
      key={"netint"}
      technologies={[
        "React",
        "Typescript",
        "Docker",
        "Supabase",
        "Postgres",
        "Redis",
        "RAG",
        "Python",
      ]}
      imgs={NETINTGallery}
    />
  );
}
