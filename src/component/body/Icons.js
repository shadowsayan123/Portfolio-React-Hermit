import React from "react";
import IconsCss from "./icons.module.css";
import ReactIcon from "../../resources/ReactIcon.png";
import MongoDbIcon from "../../resources/MongodbIcon.png";
import ExpressIcon from "../../resources/ExpressIconWhite.png";
import NodeJsIcon from "../../resources/NodeJsIcon.png";

import { TechStack, TechUrls } from "./Constants";
function Icons({ tech }) {
  console.log("tech", tech);
  let icon = "";
  let url = "";
  switch (tech) {
    case TechStack.REACT:
      icon = ReactIcon;
      url = TechUrls.REACT;
      break;
    case TechStack.MONGODB:
      icon = MongoDbIcon;
      url = TechUrls.MONGODB;

      break;
    case TechStack.EXPRESS:
      icon = ExpressIcon;
      url = TechUrls.EXPRESS;

      break;
    case TechStack.NODE:
      icon = NodeJsIcon;
      url = TechUrls.NODE;

      break;
    default:
      return tech;
  }
  return (
    <a href={url}>
      <img className={IconsCss.iconFeatures} src={icon} alt={tech} />
    </a>
  );
}

export default Icons;
