export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className="hidden rounded border border-red-500 p-2 px-3 text-sm leading-normal ease-in-out hover:bg-red-200 hover:transition-all sm:inline-flex">
      Resume
    </a>
  );
}
