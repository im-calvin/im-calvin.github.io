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
      description="Developed, deployed, and trained employees on internal tools used to improve developer efficiency through generative AI."
      implementation={[
        "Achieved an 80% adoption rate among 100+ employees",
        "Enabled single sign-on with Microsoft Entra to streamline access to tools",
        "Saved $4700/month by migrating from Enterprise ChatGPT to self-hosted chatbot",
        "Streamlined access for Jira & Confluence by creating a custom search engine",
        "Built an API key proxy to manage and track usage of API keys across the company",
        "Automated key deactivation when employees left the company to reduce security risks",
        "Developed a code interpreter web app for generating and executing code in isolated Docker environments",
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
