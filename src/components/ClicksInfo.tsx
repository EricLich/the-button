import React, { memo, useEffect, useRef, useState } from "react";
import { ColorSelectedTimes } from "../utils/types";
import InfoBar from "./InfoBar";

interface ClicksInfoProps {
  colorSelectedTimes: ColorSelectedTimes;
  totalClicks: number;
}

const ClicksInfo: React.FC<ClicksInfoProps> = ({
  colorSelectedTimes,
  totalClicks,
}) => {
  return (
    <div className="w-[70%] p-5 flex flex-col justify-between gap-4 items-center bg-white rounded-xl shadow-2xl">
      {Object.keys(colorSelectedTimes).map((color: string) => (
        <InfoBar
          key={color}
          color={color}
          clicks={colorSelectedTimes[color as keyof ColorSelectedTimes]}
          totalClicks={totalClicks}
        />
      ))}
    </div>
  );
};

export default memo(ClicksInfo);
