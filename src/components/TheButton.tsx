import React, { useEffect, useState } from "react";
import { buttonColors } from "../utils/colors";
import {
  colorSelection,
  getColorLocalStorage,
  setColorLocalStorage,
} from "../utils/functions";

// setting max timer in seconds
const TIMER_MAX_TIME: number = 60;

// creating interface from which we will create the clock state
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
  //getting the color if there's any on the local storage, else, it will be the purple one
  const localColor = getColorLocalStorage();

  // initializing clock state
  const [clock, setClock] = useState<CustomCoundownClock>({
    alreadyClicked: false,
    remainingSecs: TIMER_MAX_TIME,
    tickTock: false,
    color: {
      currentBgColor: localColor.bgColor,
      currentTextColor: localColor.textColor,
    },
  });

  // clock countdown logic
  const handleCountdown = (): void => {
    if (clock.remainingSecs > 0) {
      setClock((prev) => ({
        ...prev,
        remainingSecs: prev.remainingSecs--,
        tickTock: !prev.tickTock,
      }));
    }
  };

  // click handler for when the button is clicked
  const handleClick = (): void => {
    // getting correct color for the btn passing the remaining seconds
    const { bgColor: newBg, textColor: newTextColor } = colorSelection(
      clock.remainingSecs
    );
    // setting the local storage with the new colors to display and save
    setColorLocalStorage({ bgColor: newBg, textColor: newTextColor });
    // setting current clock state with new colors, etc
    setClock((prev) => ({
      ...prev,
      alreadyClicked: true,
      remainingSecs: TIMER_MAX_TIME,
      color: {
        currentBgColor: newBg,
        currentTextColor: newTextColor,
      },
    }));
  };

  // executing handleCountdown each second and triggering the use effect with the tickTock from the state
  useEffect(() => {
    const count = setTimeout(() => {
      handleCountdown();
    }, 1000);

    return () => {
      clearTimeout(count);
    };
  }, [clock.tickTock]);

  //redering btn
  return (
    <button
      //disable btn with specified conditions
      disabled={clock.remainingSecs === 0 || clock.alreadyClicked}
      onClick={handleClick}
      //applying different styling depending on the state
      className={`${
        clock.alreadyClicked ? "cursor-not-allowed" : "cursor-pointer"
      } ${clock.color.currentBgColor} ${
        clock.color.currentTextColor
      } w-[200px] h-[100px] rounded-3xl shadow-2xl text-5xl hover:bg-[url('/src/assets/imgs/never-gonna.gif')] hover:bg-cover hover:bg-center`}
    >
      {clock.remainingSecs}
    </button>
  );
};

export default TheButton;
