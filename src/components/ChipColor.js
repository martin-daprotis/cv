import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import { Chip, Avatar } from "@material-ui/core";

const classesChip = makeStyles({
  avatar: {
    color: "#FFFFFF",
    backgroundColor: (props) => darken(props.bgColor, 0.5),
  },
  icon: {
    color: "#FFFFFF",
  },
});

export default function BorderLinearProgress({ ...props }) {
  const classes = classesChip(props);
  const itemIcon = props.icon;
  return (
    <Chip
      avatar={
        <Avatar>
          {itemIcon === "" ? (
            props.title
          ) : (
            <span
              className={itemIcon}
              style={{ fontSize: "1.3em", color: "#FFF" }}
            ></span>
          )}
        </Avatar>
      }
      label={props.title}
      clickable={false}
      classes={{
        icon: classes.icon,
        avatar: classes.avatar,
      }}
      size="small"
      variant="outlined"
    />
  );
}
