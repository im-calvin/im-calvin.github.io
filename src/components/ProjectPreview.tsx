import "../styles/AccentShard.css";

interface ProjectPreviewProps {
  title: string;
  description?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  date?: string;
  selected?: boolean;
  className?: string;
}

export default function ProjectPreview({
  title,
  description,
  onClick,
  date,
  selected,
  className,
}: ProjectPreviewProps) {
  return (
    <>
      <button
        className={`card relative inline-block h-fit rounded border first-letter:cursor-pointer ${
          selected
            ? "border-anya-darkPurple dark:border-moona-yellow"
            : "border-moona-darkPurple dark:border-moona-purple"
        } bg-moona-purple/[0.3] p-2 hover:bg-moona-purple/80  dark:bg-moona-lightPurple/10 dark:hover:bg-moona-purple/[0.3] ${className}`}
        onClick={onClick}
      >
        <div>{title}</div>
        <div className="text-sm text-opacity-80 dark:text-gray-300">{date}</div>
      </button>
    </>
  );
}
