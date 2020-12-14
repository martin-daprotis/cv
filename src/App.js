import React, { useRef } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, Box, makeStyles, Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import AppThemeOptions from "./components/theme";
import Presentation from "./components/Presentation.js";
import PersonalSkills from "./components/PersonalSkills.js";
import Knowledge from "./components/Knowledge.js";
import Work from "./components/Work.js";
import {SectionContainer1,SectionLastContainer2} from "./components/StyledComponents/SectionContainer"
// import Ej1 from "./components/MANUAL/ej1"
// import Ej2 from "./components/MANUAL/ej2"
// import Ej3 from "./components/MANUAL/ej3"

import FirstImpresion from "./components/FirstImpresion"
import { AppTheme } from "./components/types";



// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from "react-switch-lang";
import EN from "./lang_source/EN.json";
import SP from "./lang_source/SP.json";

// Do this two lines only when setting up the application
setTranslations({ EN, SP });
setDefaultLanguage("EN");

// If you want to remember selected language
setLanguageCookie();

const useStyles = makeStyles((theme) => ({
  topic: {
    margin: "auto",
    paddingTop: "100px",
  },
}));

function App( { toggleTheme, theme, t }) {
  const classes = useStyles();
  const muiTheme = createMuiTheme(AppThemeOptions[theme]);

  const [key, setLanguageType] = React.useState("EN");

  const handleClickLang = (e) => {
    console.log("click lang", key);
    setLanguageType(key === "SP" ? "EN" : "SP");
    setLanguage(key);
  };

  const [tabValue, setValue] = React.useState(0);
  const topics = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleClickTab = (event, newValue) => {
    topics[newValue].current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline>
        <NavBar
          onThemeTypeSwitch={toggleTheme}
          handleClickLang={handleClickLang}
          t={t}
          handleClickTab={handleClickTab}
          tabValue={tabValue}
        />
              <FirstImpresion t={t} />
        <Container>
          {/* <Ej1/> */}
          {/* <Ej3/>
          <Ej3 name='Juan'/>
          <Ej3 name='Pedro'/> */}
          <Box justifyContent="center">
            <Box className={classes.topic} ref={topics[0]}>
              <Presentation t={t} />
            </Box>
            <Box className={classes.topic} ref={topics[1]}>
              <SectionContainer1 isDark={theme!== AppTheme.LIGHT}>
                <Knowledge t={t} />
              </SectionContainer1>
            </Box>
            <Box className={classes.topic} ref={topics[2]}>
              <PersonalSkills t={t} />
            </Box>
            <Box className={classes.topic} ref={topics[3]}>
              <SectionLastContainer2 isDark={theme!== AppTheme.LIGHT}>
              <Work t={t} language={key} />
              </SectionLastContainer2>
            </Box>
          </Box>
        </Container>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default translate(App);
