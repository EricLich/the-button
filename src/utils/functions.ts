import { buttonColors } from "./colors";
import { Color, COLOR_CLICK_TIMES } from "./types";

// function to return the color to set on the btn
export const colorSelection = (counter: number): { color: Color, colorName: string } => {
  if (counter >= COLOR_CLICK_TIMES.PURPLE) return { color: buttonColors.purple, colorName: 'purple' };
  if (counter < COLOR_CLICK_TIMES.PURPLE && counter >= COLOR_CLICK_TIMES.BLUE) return { color: buttonColors.blue, colorName: 'blue' };
  if (counter < COLOR_CLICK_TIMES.BLUE && counter >= COLOR_CLICK_TIMES.GREEN) return { color: buttonColors.green, colorName: 'green' };
  if (counter < COLOR_CLICK_TIMES.GREEN && counter >= COLOR_CLICK_TIMES.YELLOW) return { color: buttonColors.yellow, colorName: 'yellow' };
  if (counter < COLOR_CLICK_TIMES.YELLOW && counter >= COLOR_CLICK_TIMES.ORANGE) return { color: buttonColors.orange, colorName: 'orange' };
  if (counter < COLOR_CLICK_TIMES.ORANGE && counter >= COLOR_CLICK_TIMES.RED) return { color: buttonColors.red, colorName: 'red' };

  return { color: buttonColors.grey, colorName: 'notClicked' };
}

// function to set the color after click on localstorage to persist
export const setColorLocalStorage = (color: Color): void => {
  window.localStorage.setItem('btnColor', JSON.stringify(color));
}

// function to get the btn color from localstorage if it's benn set before. If not we return the grey basic color
export const getColorLocalStorage = (): Color => {
  let color: Color = buttonColors.grey;
  if (window.localStorage.getItem('btnColor')) {
    //@ts-ignore
    color = JSON.parse(window.localStorage.getItem('btnColor'))
  }

  return color;
}