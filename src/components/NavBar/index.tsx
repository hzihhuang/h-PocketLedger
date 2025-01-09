import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return <div className={clsx(css.navbar)}>NavBar</div>;
};
export default NavBar;
