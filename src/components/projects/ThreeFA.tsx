// 3fa images
import ThreeFA1 from "../../images/3fa/1.png";
import ThreeFA2 from "../../images/3fa/2.png";
import ThreeFA3 from "../../images/3fa/3.png";
import ThreeFA4 from "../../images/3fa/4.jpg";
import ThreeFA5 from "../../images/3fa/5.png";
import ThreeFA6 from "../../images/3fa/6.png";

import GithubIcon from "../icons/GithubIcon";
import { Icon } from "@iconify/react";

import ProjectExpanded from "../ProjectExpanded";
import { type GalleryImage } from "../ProjectExpanded";

export default function ThreeFA() {
  const ThreeFAGallery: GalleryImage[] = [
    {
      img: ThreeFA4,
      title: "Block diagram for communication between hardware and software",
    },
    {
      img: ThreeFA3,
      title: "Database schema",
    },
    {
      img: ThreeFA1,
      title: "Login with camera capture",
    },
    {
      img: ThreeFA2,
      title: "Successful login to cloud storage",
    },
    {
      img: ThreeFA5,
      title: "Fritzing diagram for gesture recognition hardware",
    },
    {
      img: ThreeFA6,
      title: "Breadboard for hardware",
    },
  ];

  return (
    <ProjectExpanded
      title="3FA"
      titleLink="https://www.youtube.com/watch?v=EXM25gpxC9Y"
      description="A 3-Factor-Authentication app that uses a combination of password, facial recognition, and gesture-based passwords to authenticate users to access their cloud storage platform."
      implementation={[
        "Client app built with Electron",
        "Raspberry Pico with accelerometer and gyroscope to capture motion sequences",
        "Encrypted communications between clients and the server",
        "Custom CNN network to recognize user's face",
        "Admin dashboard to view login attempts",
        "Postman for API testing",
        "Indexed database for image blob storage",
        "Regression tests and builds with Github Actions",
      ]}
      technologies={[
        "React",
        "TailwindCSS",
        "Javascript",
        "Electron",
        "Python",
        "Flask",
        "PyTorch",
        "SQL",
        "Docker",
        "Raspberry Pi",
      ]}
      imgs={ThreeFAGallery}
      key={"3fa"}
      imgLink="https://www.youtube.com/watch?v=EXM25gpxC9Y"
      icons={[
        <GithubIcon
          href="https://github.com/Computing-Collective/3FA/"
          ariaLabel="Github"
          key="github"
        />,
        <a href="https://3fa.netlify.app/">
          <Icon icon="material-symbols:open-in-new" className="h-6 w-6" />
        </a>,
        <a href="https://www.youtube.com/watch?v=EXM25gpxC9Y">
          <Icon icon="mdi:youtube" className="h-6 w-6" />
        </a>,
      ]}
      subtitle="How it works:"
    />
  );
}
