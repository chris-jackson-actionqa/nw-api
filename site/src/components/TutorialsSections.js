import {
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import React from "react";

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
              <Link href="#">Bloop Bloop Bleep</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
