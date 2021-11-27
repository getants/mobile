export const colorKey = {
  basic200: 'color-basic-200',
  basic400: 'color-basic-400',
};
export const getRandom = (
  min: number,
  max = 9,
) => Math.floor(Math.random() * (max - min)) + min;
