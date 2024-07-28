import { useEffect, useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuButton() {
  const [isOpen, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mobileMenuRef.current = document.getElementById(
      "mobilemenu"
    ) as HTMLElement;
  }, []);

  const routes = [
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Hackathons", href: "/hackathons" },
    {
      title: "Resume",
      href: "https://papermark.io/view/clz50ba8f00028oqex9thgcpl",
      target: "_blank",
    },
  ];

  return (
    <>
      <button className="z-30 hover:text-moona-purple">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </button>
      {isOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center gap-4  bg-transparent dark:text-moona-white"
            >
              <ul className="grid gap-2">
                {routes.map((item, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={item.title}
                    className="w-full rounded-xl p-[0.08rem]"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex w-full cursor-pointer items-center justify-between p-5 text-xl text-moona-black transition-colors duration-300 ease-in-out hover:text-moona-purple hover:underline dark:text-moona-white dark:hover:text-moona-purple"
                      }
                      href={item.href}
                      target={item.target}
                    >
                      <span className="flex gap-1 text-lg">{item.title}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>,
          mobileMenuRef.current!
        )}
    </>
  );
}
