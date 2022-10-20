// enum to respect time guidelines with more visual feedback instead of using just numbers that can get confusing
export enum COLOR_CLICK_TIMES {
  PURPLE = 52,
  BLUE = 42,
  GREEN = 32,
  YELLOW = 22,
  ORANGE = 12,
  RED = 0,
}

//type use when storing amount of clicks for each color
export type ColorSelectedTimes = {
  purple: number;
  blue: number;
  green: number;
  yellow: number;
  orange: number;
  red: number;
  notClicked: number;
}

// type to specify the different colors that the btn will be able to change to
export type Colors = {
  notClickable: Color;
  grey: Color;
  red: Color;
  orange: Color;
  yellow: Color;
  green: Color;
  blue: Color;
  purple: Color;
}

// type basic background color and text color
export type Color = {
  bgColor: string;
  textColor: string;
}

// type for basic user fetched from jsonplaceholder
export type User = {
  id: number;
  name: string;
  email: string;
}

