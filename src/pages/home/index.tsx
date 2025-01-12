import React from "react";
import Total from "./components/Total";
import Quarterly from "./components/Quarterly";

interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-24 p-12">
      {/* 总数 */}
      <Total />
      {/* 季度表 */}
      <Quarterly />
      {/* 分析 */}
    </div>
  );
};
export default HomePage;
