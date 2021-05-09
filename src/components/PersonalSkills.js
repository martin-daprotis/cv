import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EN from "../lang_source/EN.json";
import SP from "../lang_source/SP.json";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    float: "right",
  },
  position: {
    color: theme.palette.text.secondary,
  },
}));

export default function PersonalSkills({ language, t, sp = SP, en = EN }) {
  const classes = useStyles();
  const lang = language === "SP" ? sp : en;

  function Item({ panel, title, description }) {
    return (
      <Accordion
        TransitionProps={{
          timeout: 600,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelbh-content"
          id="panelbh-header"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography variant="h6" color="textSecondary">
              {title}
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">{description}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        fontWeight="fontWeightBold"
      >
        <Typography variant="h4">{t("navbar.personal_skills")}</Typography>
      </Box>
      {lang.personal_skills.map((k, i) => {
        return (
          <Item
            key={uuidv4()}
            title={k.skill}
            description={k.description}
            panel={i}
          />
        );
      })}
    </div>
  );
}
