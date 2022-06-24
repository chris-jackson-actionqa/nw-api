import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foo from "./routes/foo";
import Home from "./routes/home";

// Section 1: Intro
import Ide from "./routes/section01/ide";
import ExampleSite from "./routes/section01/exampleSite";
import PackageJson from "./routes/section01/packageJson";
import Prettier from "./routes/section01/prettier";
import Eslint from "./routes/section01/eslint";
import InstallNW from "./routes/section01/install-nw";
import Chromedriver from "./routes/section01/chromedriver";
import NightwatchConfigFile from "./routes/section01/nightwatchConfig";

// Section 2: Callbacks, Async/Await
import ExampleGetText from "./routes/section02/exampleGetText";

// Section 3: Locator Strategies
import LocatorStrategies from "./routes/section03/locatorStrategies";
import LocatorStrategiesExercise from "./routes/section03/locatorStrategiesExercise";
import RelativeLocators from "./routes/section03/relativeLocators";
import RelativeLocatorsExercise from "./routes/section03/relativeLocatorsExercise";
import SelectorObject from "./routes/section03/selectorObject";
import SelectorObjectExercise from "./routes/section03/selectorObjectExercise";
import WebElementIdAndElement from "./routes/section03/webElementIdAndElement";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="foo" element={<Foo />} />
            <Route path="s01/ide" element={<Ide />} />
            <Route path="s01/example-site" element={<ExampleSite />} />
            <Route path="s01/package-json" element={<PackageJson />} />
            <Route path="s01/prettier" element={<Prettier />} />
            <Route path="s01/eslint" element={<Eslint />} />
            <Route path="s01/install-nw" element={<InstallNW />} />
            <Route path="s01/chromedriver" element={<Chromedriver />} />
            <Route
              path="s01/nightwatch-config"
              element={<NightwatchConfigFile />}
            />

            {/* -------------- SECTION 02 -------------*/}
            <Route path="s02/gettext" element={<ExampleGetText />} />

            {/* -------------- SECTION 03 -------------------- */}
            <Route path="s03/locatorStrategies" element={<LocatorStrategies />} />
            <Route
              path="s03/locatorStrategiesExercise"
              element={<LocatorStrategiesExercise />}
            />
            <Route path="s03/relativeLocators" element={<RelativeLocators />} />
            <Route
              path="s03/relativeLocatorsExercise"
              element={<RelativeLocatorsExercise />}
            />
            <Route path="s03/selectorObject" element={<SelectorObject />} />
            <Route
              path="s03/selectorObjectExercise"
              element={<SelectorObjectExercise />}
            />
            <Route
              path="s03/webElementIdAndElement"
              element={<WebElementIdAndElement />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector("#root")
);
