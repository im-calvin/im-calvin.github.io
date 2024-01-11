import React, { useEffect, useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { createPortal } from "react-dom";

export default function MenuButton() {
  const [open, isOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mobileMenuRef.current = document.getElementById(
      "mobilemenu"
    ) as HTMLElement;
  }, []);

  const menuItem = (text: string, href: string, target?: string) => {
    return (
      <a
        className="cursor-pointer text-xl text-moona-black transition-colors duration-300 ease-in-out hover:text-moona-purple hover:underline dark:text-moona-white dark:hover:text-moona-purple"
        href={href}
        target={target}
      >
        {text}
      </a>
    );
  };

  return (
    <>
      <button className="z-30 hover:text-moona-purple">
        <Hamburger toggled={open} toggle={isOpen} size={24} />
      </button>
      {open &&
        createPortal(
          <div
            className={`transform transition-all duration-300 ${
              open ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } flex flex-col items-center justify-center gap-4 bg-moona-white  dark:bg-anya-darkPurple dark:text-moona-white`}
          >
            {menuItem("Projects", "/projects")}
            {menuItem("Experience", "/experience")}
            {menuItem("Resume", "/resume.pdf", "_blank")}
          </div>,
          mobileMenuRef.current!
        )}
    </>
  );
}
