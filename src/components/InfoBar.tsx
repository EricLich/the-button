import React, { useState } from "react";

interface InfoBarProps {
  color: string;
  clicks: any;
  totalClicks: number;
}

const InfoBar: React.FC<InfoBarProps> = ({ clicks, color, totalClicks }) => {
  const [percentage, setPercentage] = useState<number>(
    Math.floor((clicks / totalClicks) * 100)
  );

  return (
    <div className="w-full h-14 border flex items-center border-black px-3 py-1 rounded-lg">
      <div className="flex items-center gap-2">
        <h3>{color.toUpperCase()}:</h3>
        <p>Clicked {clicks} times</p>
      </div>
      <h2 className="ml-auto">{percentage}%</h2>
    </div>
  );
};

export default InfoBar;
