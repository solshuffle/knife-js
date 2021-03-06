const sizes = {
  fontSize: 16,
  lineHeight: 28,
  scaleFactor: 1.25,

  pxToRems: (number: number) => `${number / sizes.fontSize}rem`,
  space: (number: number) =>
    `${(sizes.lineHeight / sizes.fontSize) * number}rem`,
};

export default sizes;
