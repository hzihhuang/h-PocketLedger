import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props {}

const FloatButton: React.FC<Props> = ({}) => {
  return <div className={clsx(css.floatButton)}></div>;
};
export default FloatButton;
