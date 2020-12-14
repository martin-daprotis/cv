import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import BorderLinearProgress from "./BorderLinearProgress";
import ChipColor from "./ChipColor";
import EN from "../lang_source/EN.json";
import "react-circular-progressbar/dist/styles.css";
import Circular from "./Circular.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: theme.palette.text.primary,
  },
  knowledgeSubt: {
    color: theme.palette.text.secondary,
  },
}));


const FormRow = ({ t,items, startAnimation }) => {
  const classes = useStyles();

  return (
    <>
      {items.map((it, i) => {
        return (
          <Grid
            container
            key={it.title}
            item
            style={{ marginBottom: "10px", paddingLeft: "15px", paddingRight: "15px" }}
          >
            <Grid item xs={6} className={classes.item}>
              <ChipColor
                title={t(it.title)}
                bgColor={"#dce775"}
                icon={it.icon}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">{it.value}%</Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "5px" }}>
              <BorderLinearProgress startAnimation={startAnimation} value={it.value} bgColor={"#dce775"} />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}



export default function Knowledge({ t }) {
  const classes = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      console.log(currentPosition)
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if(scrollTop>1000 && !start){
      setStart(true);
    }
    if(scrollTop<1000 && start){
      setStart(false)
    }

  }, [scrollTop]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{padding:"1em"}}>
          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            fontWeight="fontWeightBold"
          >
            <Typography variant="h4">
              {t("work_translation.technical_skills")}
            </Typography>
          </Box>
          {EN.knowledge.work_related.map((k, i) => {
            return (
              <div key={t("work_translation." + k.title)}>
                <Box display="flex" justifyContent="start" m={1} p={1}>
                  <Typography
                    varian="subtitle2"
                    className={classes.knowledgeSubt}
                  >
                    {t("work_translation." + k.title)}
                  </Typography>
                </Box>
                <FormRow t={t} items={k.list} bgColor={k.bgColor} startAnimation={start}/>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              m={1}
              p={1}
              fontWeight="fontWeightBold"
            >
              <Typography variant="h4">
                {t("work_translation.professional_skills")}
              </Typography>
            </Box>
            <Circular t={t} elems={EN.knowledge.professional_skills.list} startAnimation={start} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
