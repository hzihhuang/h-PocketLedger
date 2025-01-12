import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(css.card, className)}>{children}</div>;
};
export default Card;
