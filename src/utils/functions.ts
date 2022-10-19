import { buttonColors } from "./colors";
import { Color, COLOR_CLICK_TIMES } from "./types";


export const colorSelection = (counter: number): Color => {

  if (counter >= COLOR_CLICK_TIMES.PURPLE) return buttonColors.purple;
  if (counter < COLOR_CLICK_TIMES.PURPLE && counter >= COLOR_CLICK_TIMES.BLUE) return buttonColors.blue;
  if (counter < COLOR_CLICK_TIMES.BLUE && counter >= COLOR_CLICK_TIMES.GREEN) return buttonColors.green;
  if (counter < COLOR_CLICK_TIMES.GREEN && counter >= COLOR_CLICK_TIMES.YELLOW) return buttonColors.yellow;
  if (counter < COLOR_CLICK_TIMES.YELLOW && counter >= COLOR_CLICK_TIMES.ORANGE) return buttonColors.orange;
  if (counter < COLOR_CLICK_TIMES.ORANGE && counter >= COLOR_CLICK_TIMES.RED) return buttonColors.red;

  return buttonColors.grey;
}

export const setColorLocalStorage = (color: Color): void => {
  window.localStorage.setItem('btnColor', JSON.stringify(color));
}

export const getColorLocalStorage = (): Color => {
  let color: Color = buttonColors.grey;
  if (window.localStorage.getItem('btnColor')) {
    //@ts-ignore
    color = JSON.parse(window.localStorage.getItem('btnColor'))
  }

  return color;
}