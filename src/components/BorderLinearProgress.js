import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledLinearProgress = makeStyles({
  root: (props) => ({
    height: 10,
    backgroundColor: "#bdbdbd",
    borderRadius: 20,
  }),
  bar: {
    borderRadius: 20,
    backgroundColor: (props) => props.bgColor,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const BorderLinearProgress = ({ startAnimation, value, ...props }) => {
  const classes = useStyles();
  const classesLinear = StyledLinearProgress(props);
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

  return (
    <div className={` ${classes.root}`}>
      <LinearProgress
        classes={{
          root: classesLinear.root,
          bar: classesLinear.bar, //aplica a la barra
        }}
        variant="determinate"
        value={progress}
        // value={props.value}
      />
    </div>
  );
};

export default BorderLinearProgress;
