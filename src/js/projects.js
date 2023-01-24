import React, { Component } from "react";
import AnimatedPage from "./AnimatedPage";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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
          <div className="accordion">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="musictag-content"
                id="musictag-header"
              >
                <Typography>Musictag</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Lorem ipsum</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="notion-content"
                id="notion-header"
              >
                <Typography>Notion Canvas Sync</Typography>
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
                aria-controls="hacktoschool-content"
                id="hacktoschool-header"
              >
                <Typography>
                  Organic Chemistry Quiz Discord Bot / Hack To School 2022 Hackathon
                </Typography>
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
