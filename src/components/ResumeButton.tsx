export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded border border-red-500 p-2 px-3 text-sm leading-normal ease-in-out hover:bg-red-200 hover:transition-all md:inline-flex">
      Resume
    </a>
  );
}
