import ResumeIcon from "./icons/ResumeIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function SocialList() {
  return (
    <div className="fixed bottom-0 left-20 flex w-10 flex-col items-center justify-center">
      <ul className="fill-none">
        <li className="my-5 transition-transform ease-in-out hover:translate-y-[-3px] focus:translate-y-[-3px]">
          <GithubIcon href="https://github.com/im-calvin" ariaLabel="Github" />
        </li>
        <li className="my-5 transition-transform ease-in-out hover:translate-y-[-3px] focus:translate-y-[-3px]">
          <LinkedinIcon
            href="https://linkedin.com/in/kelvinhkwong"
            ariaLabel="LinkedIn"
          />
        </li>
        <li className="my-5 transition-transform ease-in-out hover:translate-y-[-3px] focus:translate-y-[-3px]">
          <ResumeIcon href="/resume.pdf" ariaLabel="Resume" />
        </li>
      </ul>
      <div className="m-0 h-20 w-px border border-moona-purple dark:border-moona-yellow" />
    </div>
  );
}
