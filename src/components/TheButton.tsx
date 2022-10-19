import React, { useEffect, useState } from "react";
import { buttonColors } from "../utils/colors";
import {
  colorSelection,
  getColorLocalStorage,
  setColorLocalStorage,
} from "../utils/functions";

const TIMER_MAX_TIME: number = 60;

interface CustomCoundownClock {
  alreadyClicked: boolean;
  remainingSecs: number;
  tickTock: boolean;
  color: {
    currentBgColor: string;
    currentTextColor: string;
  };
}

const TheButton = () => {
  const localColor = getColorLocalStorage();

  const [clock, setClock] = useState<CustomCoundownClock>({
    alreadyClicked: false,
    remainingSecs: TIMER_MAX_TIME,
    tickTock: false,
    color: {
      currentBgColor: localColor.bgColor,
      currentTextColor: localColor.textColor,
    },
  });

  const handleCountdown = (): void => {
    if (clock.remainingSecs > 0) {
      setClock((prev) => ({
        ...prev,
        remainingSecs: prev.remainingSecs--,
        tickTock: !prev.tickTock,
      }));
    }
  };

  const handleClick = (): void => {
    const { bgColor: newBg, textColor: newTextColor } = colorSelection(
      clock.remainingSecs
    );
    setColorLocalStorage({ bgColor: newBg, textColor: newTextColor });
    setClock((prev) => ({
      ...prev,
      alreadyClicked: true,
      color: {
        currentBgColor: newBg,
        currentTextColor: newTextColor,
      },
    }));
  };

  useEffect(() => {
    const count = setTimeout(() => {
      handleCountdown();
    }, 1000);

    return () => {
      clearTimeout(count);
    };
  }, [clock.tickTock]);

  return (
    <button
      disabled={clock.remainingSecs === 0 || clock.alreadyClicked}
      onClick={handleClick}
      className={`${
        clock.alreadyClicked ? "cursor-not-allowed" : "cursor-pointer"
      } ${clock.color.currentBgColor} ${
        clock.color.currentTextColor
      }  w-[200px] h-[100px] rounded-3xl shadow-2xl text-5xl hover:bg-[url('/src/assets/imgs/never-gonna.gif')] hover:bg-cover hover:bg-center`}
    >
      {clock.remainingSecs}
    </button>
  );
};

export default TheButton;
