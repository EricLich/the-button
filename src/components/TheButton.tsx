import React, { useEffect, useState } from "react";
import {
  colorSelection,
  getColorLocalStorage,
  setColorLocalStorage,
} from "../utils/functions";
import { ColorSelectedTimes } from "../utils/types";

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

interface TheButtonProps {
  setOpenInfo: (openInfo: boolean) => void;
  setColorSelectedTimes: React.Dispatch<
    React.SetStateAction<ColorSelectedTimes>
  >;
  colorSelectedTimes: ColorSelectedTimes;
  setTotalClicks: React.Dispatch<React.SetStateAction<number>>;
}

const TheButton: React.FC<TheButtonProps> = ({
  setOpenInfo,
  setColorSelectedTimes,
  colorSelectedTimes,
  setTotalClicks,
}) => {
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
  const handleClick = (currentUserClicked?: boolean): void => {
    // getting correct color for the btn passing the remaining seconds
    const { color, colorName } = colorSelection(clock.remainingSecs);
    const { bgColor: newBg, textColor: newTextColor } = color;

    //getting previous with colorName key and adding one to the value registering a user's click
    const newValue =
      Object.entries(colorSelectedTimes).filter(
        (arr) => arr[0] === colorName
      )[0][1] + 1;
    //setting new value to clicked color
    setColorSelectedTimes((prev: ColorSelectedTimes) => ({
      ...prev,
      [colorName]: newValue,
    }));
    setTotalClicks((prev) => (prev += 1));

    if (currentUserClicked) {
      // setting the local storage with the new colors to display and save when the current user is the one clicking
      setColorLocalStorage({ bgColor: newBg, textColor: newTextColor });
      // setting current clock state with new colors, etc
      setClock((prev) => ({
        ...prev,
        alreadyClicked: currentUserClicked ? true : false,
        remainingSecs: TIMER_MAX_TIME,
        color: {
          currentBgColor: newBg,
          currentTextColor: newTextColor,
        },
      }));
      setOpenInfo(true);
    }
  };

  const generateAutoClick = (): void => {
    const randomNum: number = Math.floor(Math.random() * 10);
    // generate a random click - the higher the number the les probability to generate a random click
    if (randomNum > 9) {
      setClock((prev) => ({
        ...prev,
        remainingSecs: TIMER_MAX_TIME,
      }));
      handleClick();
    }
  };

  // executing handleCountdown and generateRandomClick each second and triggering the use effect with the tickTock from the state
  useEffect(() => {
    const count = setTimeout(() => {
      handleCountdown();
      generateAutoClick();
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
      onClick={() => handleClick(true)}
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
