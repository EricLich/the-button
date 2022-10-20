import React, { memo } from "react";
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
  /* mapping through the keys of the color click counters and passing the color name, the amount of clicks that color has and the total clicks */
  return (
    <div className="w-[90%] max-w-[900px] p-3 md:p-5 flex flex-col justify-between gap-3 md:gap-4 items-center bg-white rounded-xl shadow-2xl md:mb-[20px]">
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
