import React, { memo } from "react";
import { ColorSelectedTimes } from "../utils/types";

interface ClicksInfoProps {
  colorSelectedTimes: ColorSelectedTimes;
}

const ClicksInfo: React.FC<ClicksInfoProps> = ({ colorSelectedTimes }) => {
  return <div>ClicksInfo</div>;
};

export default memo(ClicksInfo);
