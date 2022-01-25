import React from 'react';
import { Block } from '../../styles/variables.js';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ScheduleBlock, ScheduleWrapper } from './FAQ.style';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function customAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <p>General settings</p>
        <p Typography>I am an accordion</p>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </p>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FAQ() {
  return (
    <ScheduleWrapper>
      <ScheduleBlock>
        <h1
          style={{
            color: 'black',
            paddingTop: '50px',
            paddingBottom: '50px',
            textAlign: 'center',
          }}
        >
          자주 묻는 질문
        </h1>

        <Grid sx={{ width: '80%', marginX: 'auto' }}>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p style={{ marginY: '20px' }}>aaGeneral settings</p>
              <p>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>General settings</p>
              <p Typography>I am an accordion</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </p>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </ScheduleBlock>
    </ScheduleWrapper>
  );
}
