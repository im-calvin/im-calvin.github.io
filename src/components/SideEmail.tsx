export default function SideEmail() {
  return (
    <div className="fixed bottom-0 right-20 flex w-10 flex-col items-center justify-center ">
      <a
        style={{ writingMode: "vertical-lr" }}
        className="relative my-10 inline-block pl-1 no-underline transition-transform ease-in-out hover:translate-y-[-3px] focus:translate-y-[-3px]"
        href="mailto:contact@kelvinw.com"
      >
        contact@kelvinw.com
      </a>
      <div className="m-0 h-20 w-px border dark:border-moona-yellow" />
    </div>
  );
}
