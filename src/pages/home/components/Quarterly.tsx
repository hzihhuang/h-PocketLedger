import Card from "@/components/Card";
import { formatPrice } from "@/utils/fun";
import clsx from "clsx";
import React from "react";

interface Props {}

const list = [
  { name: "Q1", value: 14000 },
  { name: "Q2", value: 15700 },
  { name: "Q3", value: 15100 },
  { name: "Q4", value: 16800 },
];

const Quarterly: React.FC<Props> = ({}) => {
  // 最大值
  const max = Math.max(...list.map((i) => i.value));

  // 判断当前日期属于第几季度
  const quarter = new Date().getMonth() + 1;
  const currentQuarter = Math.ceil(quarter / 3);
  console.log(currentQuarter);
  return (
    <Card title="季度收入报告">
      <ul className="flex gap-8 items-end h-200 mt-16">
        {list.map((i, idx) => (
          <li
            className="flex flex-col items-center justify-end gap-8 flex-1 h-full"
            key={i.name}
          >
            <span
              className={clsx(
                "fs-14 lh-22",
                `${currentQuarter === idx + 1 ? "#2B46F9 fw-bold" : "#6A6B82"}`
              )}
            >
              {formatPrice(i.value)}
            </span>
            <div
              className={clsx("w-full radius-4", {
                "bg-[#2B46F9]": currentQuarter === idx + 1,
                "bg-[#C9D0F9]": currentQuarter !== idx + 1,
              })}
              style={{
                height: `calc(${(i.value / max) * 100}% - 16px - 16px - 16px)`,
              }}
            ></div>
            <span
              className={clsx(
                "fs-14 lh-22",
                `${currentQuarter === idx + 1 ? "#2B46F9 fw-bold" : "#6A6B82"}`
              )}
            >
              {i.name}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default Quarterly;
