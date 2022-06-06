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
          <Typography>Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link to="/s01/ide">IDE and Node</Link>
            </li>
            <li>
              <Link to="/s01/example-site">Example Site</Link>
            </li>
            <li>
              <Link to="/s01/package-json">package.json</Link>
            </li>
            <li>
              <Link to="/s01/prettier">Prettier</Link>
            </li>
            <li>
              <Link to="/s01/eslint">Eslint</Link>
            </li>
            <li>
              <Link to="/s01/install-nw">Install Nightwatch</Link>
            </li>
            <li>
              <Link to="/s01/chromedriver">Chromedriver</Link>
            </li>
            <li>
              <Link to="/s01/nightwatch-config">Nightwatch Config File</Link>
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
          <Typography>Section 2: Callbacks and Async/Await</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link to="/s02/gettext">Example: getText</Link>
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
          <Typography>
            Section 3: Locators, Selectors, and Web Element IDs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link to="/s03/locatorStrategies">Locator Strategies</Link>
            </li>
            <li>
              <Link to="/s03/locatorStrategiesExercise">
                EXERCISE: Locator Strategies
              </Link>
            </li>
            <li>
              <Link to="/s03/relativeLocators">Relative Locators</Link>
            </li>
            <li>
              <Link to="/s03/relativeLocatorsExercise">
                EXERCISE: Relative Locators
              </Link>
            </li>
            <li>
              <Link to="/s03/selectorObject">Selector Object</Link>
            </li>
            <li>
              <Link to="/s03/selectorObjectExercise">
                EXERCISE: Selector Object
              </Link>
            </li>
            <li>
              <Link to="/s03/webElementIdAndElement">
                Web Element IDs and "element()"
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
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
      </Accordion> */}
    </div>
  );
}
