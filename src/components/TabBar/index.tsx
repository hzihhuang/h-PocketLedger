import React, { useState } from "react";
import clsx from "clsx";
import css from "./index.module.scss";

interface Props {}

const TabBar: React.FC<Props> = ({}) => {
  const list = [
    { name: "首页", icon: "home" },
    { name: "图标", icon: "icon" },
    { name: "明细", icon: "detail" },
    { name: "设置", icon: "setting" },
  ];
  const [active, setActive] = useState(list[0].name);
  return (
    <div className={clsx(css.tabbar)}>
      {list.map((item) => (
        <div
          className={clsx("tabbar-item", { active: item.name === active })}
          onClick={() => setActive(item.name)}
          key={item.name}
        >
          <div>{item.icon}</div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
export default TabBar;
