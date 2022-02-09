export const getRandom = (min: number, max = 9) =>
  Math.floor(Math.random() * (max - min)) + min;
