import React from "react";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareIcon = ({ to, size, url, round }) => {
  switch (to) {
    case "EmailIcon":
      return <EmailIcon url={url} size={size} round={round} />;
    case "FacebookIcon":
      return <FacebookIcon url={url} size={size} round={round} />;
    case "LinkedinIcon":
      return <LinkedinIcon url={url} size={size} round={round} />;
    case "TwitterIcon":
      return <TwitterIcon url={url} size={size} round={round} />;
    case "WhatsappIcon":
      return <WhatsappIcon url={url} size={size} round={round} />;
    default:
      return "";
  }
};

export default ShareIcon;
