import { Colors } from "./types";

// const with all different colors necessary to follow the guidelines specified on the challenge (using tailwind classes)
export const buttonColors: Colors = {
  notClickable: {
    bgColor: 'white',
    textColor: '!text-black',
  },
  grey: {
    bgColor: 'bg-gray-500',
    textColor: '!text-white'
  },
  red: {
    bgColor: 'bg-red-600',
    textColor: '!text-white',
  },
  orange: {
    bgColor: 'bg-orange-500',
    textColor: '!text-black',
  },
  yellow: {
    bgColor: 'bg-yellow-400',
    textColor: '!text-black',
  },
  green: {
    bgColor: 'bg-green-500',
    textColor: '!text-white',
  },
  blue: {
    bgColor: 'bg-blue-600',
    textColor: '!text-white',
  },
  purple: {
    bgColor: 'bg-purple-900',
    textColor: '!text-white'
  }
}