import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={clsx(css.card)}>{children}</div>;
};
export default Card;
