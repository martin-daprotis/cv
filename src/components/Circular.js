import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  circular_style: {
    marginTop: theme.spacing(2),
  },
  knowledgeSubt: {
    color: theme.palette.text.secondary,
  },
}));

const AnimatedCircularPB = ({ value, startAnimation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = null;
    if (progress < value && startAnimation) {
      timer = setTimeout(() => {
        setProgress((oldProgress) => {
          return Math.min(oldProgress + 3, value);
        });
      }, 150);
    }

    if (!startAnimation) {
      setProgress(0);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [progress, startAnimation, value]);

  return <CircularProgressbar value={progress} text={`${progress}%`} />;
};

export default function Circular({ t, elems, startAnimation }) {
  const classes = useStyles();

  return (
    <div style={{ padding: "40px" }}>
      <Grid container justify="center">
        {elems.map((item, i) => {
          return (
            <Grid key={`ps_${i}`} item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                style={{ width: "50%", margin: "auto" }}
              >
                <Grid item className={classes.circular_style}>
                  <AnimatedCircularPB
                    value={item.value}
                    startAnimation={startAnimation}
                  />
                </Grid>
              </Box>
              <Box display="flex" justifyContent="center" m={1} p={1}>
                <Typography
                  varian="subtitle2"
                  className={classes.knowledgeSubt}
                >
                  {t(`work_translation.${item.title}`)}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
