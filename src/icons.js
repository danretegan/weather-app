import sprite from './images/icons/icons-defs.svg';

const iconIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
];

const icons = iconIds.reduce((acc, id) => {
  acc[id] = `${sprite}#icon-${id}`;
  return acc;
}, {});

export default icons;
