import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function BThere() {
  const BThereGallery: GalleryImage[] = [];

  return (
    <ProjectExpanded
      title="BThere"
      titleLink="https://devpost.com/software/bthere-hobi6k"
      description="Helped people be a better friend to their friends by analyzing video conversations and providing suggestions for users to connect with their friends on a deeper level."
      implementation={[
        "Employed Google Cloud's facial recognition and speech-to-text API to understand the friend's mood, likes, and dislikes",
        "Generated personal suggestions based on each friend's preferences, and current mood using OpenAI GPT-4 API",
        "Leveraged Amazon's Facial Rekognition API to detect which one of your friends are speaking and match it to their profile",
        "Created a Flask API which handles data storage and authentication through Firebase",
        "Developed a frontend using React.js and shadcn-ui to display the user's friends and suggestions",
        "Implemented video streaming using WebRTC and Socket.io to allow real-time video chat between friends",
      ]}
      key={"bthere"}
      technologies={[
        "Firebase",
        "React.js",
        "Flask",
        "Google Cloud",
        "OpenAI",
        "AWS",
        "WebRTC",
        "Socket.io",
      ]}
      imgs={BThereGallery}
      icons={[
        <GithubIcon
          href="https://github.com/Kiroves/BThere"
          ariaLabel="Github"
          key="github"
        />,
      ]}
    />
  );
}
