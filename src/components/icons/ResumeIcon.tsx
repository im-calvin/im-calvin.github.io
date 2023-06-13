import type IconInterface from "../../utils/IconInterface";

export default function ResumeIcon({ href, ariaLabel }: IconInterface) {
  return (
    <a href="/resume.pdf" target="_blank" rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
      </svg>
    </a>
  );
}
