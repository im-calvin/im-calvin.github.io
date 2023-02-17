import React, { Component } from "react";
import AnimatedPage from "./AnimatedPage";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShareButton from "./components/ShareButton";

export default class Projects extends Component {
  render() {
    return (
      <AnimatedPage>
        {/* TODO: 
      open multiple projects 
      decide on width
      arrow on left ?
      header text-width ? 
      */}

        <section className="text-body flex">
          <h2>My Projects</h2>
          <p></p>
          <div className="accordion">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="musictag-content"
                id="musictag-header"
              >
                <Typography>Musictag</Typography>

                <span className="small-flex-grow" />
                <ShareButton link="https://github.com/im-calvin/musictag" />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                  laying out print, graphic or web designs. The passage is attributed to
                  an unknown typesetter in the 15th century who is thought to have
                  scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                  type specimen book. It usually begins with:{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="notion-content"
                id="notion-header"
              >
                <Typography>Notion Canvas Sync</Typography>
                <span className="small-flex-grow" />
                <ShareButton link="https://github.com/im-calvin/calendar" />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                  ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="hacktoschool-content"
                id="hacktoschool-header"
              >
                <Typography>
                  Organic Chemistry Quiz Discord Bot / Hack To School 2022 Hackathon
                </Typography>
                <span className="small-flex-grow" />
                <ShareButton link="https://github.com/im-calvin/HackToSchoolBot22" />
                <ShareButton link="https://github.com/bxian03/HackToSchoolAPI22" />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="mittens-content"
                id="mittens-header"
              >
                <Typography>Mittens Bot</Typography>
                <span className="small-flex-grow" />
                <ShareButton link="https://github.com/im-calvin/mittens_bot" />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Lorem ipsum</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </AnimatedPage>
    );
  }
}
