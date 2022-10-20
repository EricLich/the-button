import React, { useEffect, useState } from "react";
import { buttonColors } from "../utils/colors";
import { Color, Colors } from "../utils/types";

interface InfoBarProps {
  color: string;
  clicks: any;
  totalClicks: number;
}

const InfoBar: React.FC<InfoBarProps> = ({ clicks, color, totalClicks }) => {
  //calculating the percentage of the clicks that this color has
  const [percentage, setPercentage] = useState<number>(
    Math.floor((clicks / totalClicks) * 100)
  );

  // getting buttnColors properties depending on the color passed to the component to be able to style the returned html
  const [colorsToShow, setColorsToShow] = useState<Color>(
    buttonColors[color as keyof Colors]
  );

  // change percentage each time the total click count changes
  useEffect(() => {
    setPercentage(Math.floor((clicks / totalClicks) * 100));
  }, [clicks]);

  return (
    <div
      /* bar styling using the dynamic colors grabbed before */
      className={`w-full h-16 border flex items-center px-3 py-1 rounded-lg ${
        colorsToShow && colorsToShow.bgColor
      } ${colorsToShow && colorsToShow.textColor}`}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-xl">{color.toUpperCase()}:</h3>
        <p className="text-md">Clicked {clicks} times</p>
      </div>
      <h2 className="ml-auto text-2xl">{percentage}%</h2>
    </div>
  );
};

export default InfoBar;
