import React, { useState } from "react";
import clsx from "clsx";
import css from "./index.module.scss";
import {
  BarChartOutlined,
  ContainerOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {}

const TabBar: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const list = [
    { name: "首页", icon: <HomeOutlined />, path: "/" },
    { name: "图表", icon: <BarChartOutlined />, path: "/chart" },
    { name: "明细", icon: <ContainerOutlined />, path: "/detail" },
    { name: "设置", icon: <SettingOutlined />, path: "/setting" },
  ];
  const [active, setActive] = useState(list[0].name);
  return (
    <div className={clsx(css.tabbar)}>
      {list.map((item) => (
        <div
          className={clsx("tabbar-item", { active: item.name === active })}
          onClick={() => {
            setActive(item.name);
            navigate(item.path);
          }}
          key={item.name}
        >
          <div className="fs-18">{item.icon}</div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
export default TabBar;
