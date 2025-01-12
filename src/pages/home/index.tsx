import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import { formatPrice } from "@/utils/fun";
import React from "react";

interface Props {}

const tabs = [
  { label: "Q1", value: "Q1" },
  { label: "Q2", value: "Q2" },
  { label: "Q3", value: "Q3" },
  { label: "Q4", value: "Q4" },
];

const HomePage: React.FC<Props> = ({}) => {
  const [active, setActive] = React.useState("Q1");
  const price = 105500;
  return (
    <div className="flex flex-col gap-24 p-12">
      <Card>
        <div className="fs-14 lh-22 fw-bold">利润与亏损</div>
        <div className="mt-8 fs-24 fw-bold lh-32">¥{formatPrice(price)}</div>
        <div className="mt-24 radius-6 h-48 overflow-hidden flex fs-16 fw-bold lh-20">
          <div className="w-[60%] bg-[#cad0f6] h-full flex items-center pl-12">
            ¥{formatPrice(price)}
          </div>
          <div className="w-[40%] bg-[#f6c9ca] h-full flex items-center justify-end pr-12">
            ¥{formatPrice(price)}
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 fs-14 lh-22 color-[#6A6B82]">
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
    </div>
  );
};
export default HomePage;
