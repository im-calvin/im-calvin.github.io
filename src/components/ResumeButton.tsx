export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded border border-moona-purple p-2 px-3 text-sm leading-normal ease-in-out hover:bg-moona-purple/80 hover:transition-all dark:border-moona-purple dark:hover:bg-moona-purple/[0.3] md:inline-flex"
    >
      Resume
    </a>
  );
}
