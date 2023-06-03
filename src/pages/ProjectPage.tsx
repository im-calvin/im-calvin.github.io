import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ShareButton from '../components/ShareButton'

function ProjectPage() {
  return (
    <>
      <h2>My Projects</h2>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Musictag
          <ShareButton link="https://github.com/im-calvin/musictag" />
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with:{' '}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Notion Canvas Sync
          <ShareButton link="https://github.com/im-calvin/calendar" />
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
          amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Organic Chemistry Quiz Discord Bot / Hack To School 2022 Hackathon
          <ShareButton link="https://github.com/im-calvin/HackToSchoolBot22" />
          <ShareButton link="https://github.com/bxian03/HackToSchoolAPI22" />
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Mittens Bot
          <ShareButton link="https://github.com/im-calvin/Mittens" />
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum</AccordionDetails>
      </Accordion>
    </>
  )
}

// eslint-disable-next-line prettier/prettier
export default ProjectPage
