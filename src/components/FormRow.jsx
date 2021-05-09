import React from 'react'
import BorderLinearProgress from "./BorderLinearProgress";
import ChipColor from "./ChipColor";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,  Typography } from "@material-ui/core";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  item: {
    color: theme.palette.text.primary,
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

export default FormRow;