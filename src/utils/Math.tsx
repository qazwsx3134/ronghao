// create random number
export const random = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};
