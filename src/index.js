import React from "react";
import ReactDOM from "react-dom";

import { AppTheme } from "./components/types";
import App from "./App";

function Root() {
  const [theme, setTheme] = React.useState(AppTheme.DARK);

  const toggleTheme = () => {
    setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT);
  };

  return <App toggleTheme={toggleTheme} theme={theme} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
