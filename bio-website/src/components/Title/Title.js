import React from "react";
import { Typography } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";

const Title = (props) => {
  return (
    <Link
      activeClass="active"
      to={props.destination}
      spy={true}
      smooth={true}
      offset={-50}
      duration={1000}
    >
      <Typography variant="h6" className={Typography.styles}>
        {props.name}
      </Typography>
    </Link>
  );
};
export default Title;
