import { Icon } from "@iconify/react";
import "../styles/AccentShard.css";

interface TechnologyButtonProps {
  href: string;
  icon: string;
  name: string;
}

export default function TechnologyButton({
  href,
  icon,
  name,
}: TechnologyButtonProps) {
  return (
    <a
      href={href}
      className="card relative flex h-24 w-auto flex-col items-center justify-center rounded border border-moona-darkPurple bg-moona-purple/[0.3] p-2 transition-opacity duration-300 ease-in-out hover:bg-moona-purple/80 dark:border-moona-purple dark:bg-moona-lightPurple/10 dark:hover:bg-moona-purple/[0.3]"
    >
      <Icon
        icon="material-symbols:open-in-new"
        className="absolute right-0 top-0 m-2 opacity-50"
      />
      <Icon icon={icon} className="h-8 w-auto max-w-full" />
      <div className="text-center text-sm">{name}</div>
    </a>
  );
}
