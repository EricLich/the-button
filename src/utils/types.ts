export enum COLOR_CLICK_TIMES {
  PURPLE = 52,
  BLUE = 42,
  GREEN = 32,
  YELLOW = 22,
  ORANGE = 12,
  RED = 0,
}

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

export type Color = {
  bgColor: string;
  textColor: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
}