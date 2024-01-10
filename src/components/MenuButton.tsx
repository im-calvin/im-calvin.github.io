import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Drawer } from "vaul";

export default function MenuButton() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

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
      {/* <button className="z-30 hover:text-moona-purple">
        {state ? (
          // close button if sidebar is open
          <Icon
            icon="ic:round-close"
            onClick={toggleDrawer(false)}
            className="h-8 w-8 cursor-pointer"
          />
        ) : (
          <Icon
            icon="gg:menu-right"
            className="h-8 w-8 cursor-pointer"
            onClick={toggleDrawer(true)}
          />
        )}
      </button> */}
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Icon icon="gg:menu" className="h-8 w-8 cursor-pointer" />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-30 mt-36 flex flex-col rounded-t-[10px]">
            <div className="flex h-full flex-1 flex-col items-center justify-center gap-12 rounded-t-[10px] bg-moona-white p-4 dark:bg-anya-darkPurple dark:text-moona-white">
              {menuItem("Projects", "/projects")}
              {menuItem("Experience", "/experience")}
              {/* {menuItem("Blog", "/blog")} */}
              {menuItem("Resume", "/resume.pdf", "_blank")}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
