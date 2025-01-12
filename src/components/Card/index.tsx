import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ className, title, children }) => {
  return (
    <div className={clsx(css.card, className)}>
      {title && <div className="card-title">{title}</div>}
      <div>{children}</div>
    </div>
  );
};
export default Card;
