import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import { formatPrice } from "@/utils/fun";
import React, { useState } from "react";

interface Props {}

const tabs = [
  { label: "全年", value: "all" },
  { label: "Q1", value: "Q1" },
  { label: "Q2", value: "Q2" },
  { label: "Q3", value: "Q3" },
  { label: "Q4", value: "Q4" },
];

const Total: React.FC<Props> = ({}) => {
  const [active, setActive] = useState(tabs[0].value);
  const income = 14780 * 4;
  const expense = 1240 * 4;
  const total = income - expense;

  return (
    <Card title="总计">
      <div className="mt-8 fs-24 fw-bold lh-32">{formatPrice(total)}</div>
      <div className="mt-24 radius-6 h-48 overflow-hidden flex fs-16 fw-bold lh-20">
        <div
          className="w-[60%] bg-[#cad0f6] h-full flex items-center px-2"
          style={{
            width: `${(income / total) * 100}%`,
            minWidth: "fit-content",
          }}
        >
          {formatPrice(income)}
        </div>
        <div
          className="w-[40%] bg-[#f6c9ca] h-full flex items-center justify-end px-2"
          style={{
            width: `${(expense / total) * 100}%`,
            minWidth: "fit-content",
          }}
        >
          {formatPrice(expense)}
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 fs-12 lh-20 color-[#6A6B82]">
        <span>收入</span>
        <span>支出</span>
      </div>
      <Tabs
        className="mt-24"
        items={tabs}
        active={active}
        onChange={setActive}
      />
    </Card>
  );
};
export default Total;
