import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foo from "./routes/foo";
import Home from "./routes/home";
import Ide from "./routes/section01/ide";
import ExampleSite from "./routes/section01/exampleSite";
import PackageJson from "./routes/section01/packageJson";
import Prettier from "./routes/section01/prettier";

ReactDOM.render(
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
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>,
  document.querySelector("#root")
);
