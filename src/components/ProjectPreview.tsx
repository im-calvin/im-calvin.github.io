interface ProjectPreviewProps {
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  date?: string;
}

export default function ProjectPreview({
  title,
  description,
  onClick,
  date,
}: ProjectPreviewProps) {
  return (
    <>
      <div
        className="inline-block w-fit cursor-pointer rounded border border-moona-darkPurple bg-moona-purple/[0.3] p-2 hover:bg-moona-purple/80 dark:border-moona-purple dark:bg-moona-lightPurple/10 dark:hover:bg-moona-purple/[0.3]"
        onClick={onClick}
      >
        <div className="">{title}</div>
        <div className="text-sm text-opacity-30">{date}</div>
        <div className="text-sm">{description}</div>
      </div>
    </>
  );
}
