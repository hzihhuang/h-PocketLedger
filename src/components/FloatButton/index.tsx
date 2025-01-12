import React from "react";
import css from "./index.module.scss";
import clsx from "clsx";
import { PlusOutlined } from "@ant-design/icons";

interface Props {}

const FloatButton: React.FC<Props> = ({}) => {
  return (
    <div className={clsx(css.floatButton)}>
      <PlusOutlined color="white" className="fs-20" />
    </div>
  );
};
export default FloatButton;
