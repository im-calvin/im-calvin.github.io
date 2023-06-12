interface ProjectPreviewProps {
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  date?: string;
  selected?: boolean;
}

export default function ProjectPreview({
  title,
  description,
  onClick,
  date,
  selected,
}: ProjectPreviewProps) {
  return (
    <>
      <button
        className={`inline-block w-fit cursor-pointer rounded border ${
          selected
            ? "border-anya-darkPurple dark:border-moona-yellow"
            : "border-moona-darkPurple dark:border-moona-purple"
        } bg-moona-purple/[0.3] p-2 hover:bg-moona-purple/80  dark:bg-moona-lightPurple/10 dark:hover:bg-moona-purple/[0.3]`}
        onClick={onClick}
      >
        <div className="">{title}</div>
        <div className="text-sm text-opacity-30">{date}</div>
        <div className="text-sm">{description}</div>
      </button>
    </>
  );
}
