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
        className="inline-block w-fit cursor-pointer rounded border border-red-500 p-2 dark:bg-red-300/[0.5] hover:dark:bg-red-200/20"
        onClick={onClick}
      >
        <div className="">{title}</div>
        <div className="">{date}</div>
        <div className="">{description}</div>
      </div>
    </>
  );
}
