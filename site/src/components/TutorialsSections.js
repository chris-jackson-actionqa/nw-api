import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => {
  header: {
    backgroundColor: "#400CC";
  }
});

export default function TutorialsSections() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Section 1: Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link to="/foo">Foo</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Section 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link to="/foo">Foo</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
