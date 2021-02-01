import React, { useEffect, useState } from "react";
import { FirstImpression, InfoWrapper, Salutation, Hi } from "./styles.js";
import AnimatedText from "../AnimatedText";
import { withTheme } from "@material-ui/core/styles";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FI = ({ t, theme }) => {
  const { primary, secondary } = theme.palette.text;

  return (
    <div>
      <FirstImpression>
        <InfoWrapper>
          <span>
            <Hi />
          </span>
          <Salutation>{`${t("hi")} Daprotis Martín`}</Salutation>
          <AnimatedText
            text={t("study.university.degree")}
            size={"3em"}
            color={secondary}
          />
        </InfoWrapper>
      </FirstImpression>
    </div>
  );
};

export default withTheme(FI);