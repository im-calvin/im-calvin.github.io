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
        "Contributed extensively to Chatbot-UI, an open-source AI chat app with support for RAG and many LLM models",
        "Developed Python functions to consolidate internal data sources",
        "Used OpenAI/Google Gemini API to link internal models",
        "Used LangChain and other open-source AI tools to enhance data integration with internal tools",
        "Applied retrival augmentation techniques such as chunking, vectorization, and sentence window retrieval to improve model performance",
        "Worked with team leads to understand core needs and implement tools to improve efficiency",
      ]}
      key={"netint"}
      technologies={["Langchain", "RAG", "OpenAI", "Python"]}
      imgs={NETINTGallery}
    />
  );
}
