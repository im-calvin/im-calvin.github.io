/* needs to include:
- title
- company
- role
- visuals
- links to project (gh, demo, etc)
- description (resume bullet points)
- technologies used
*/
interface ProjectExpandedProps {
  title: string;
  technologies: string[];
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export default function ProjectExpanded() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <a
          href="https://www.youtube.com/watch?v=EXM25gpxC9Y"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/3fa_preview.png" alt="3FA preview" />
        </a>
      </div>
    </>
  );
}
