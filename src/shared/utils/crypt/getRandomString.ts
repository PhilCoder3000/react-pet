export const getRandomString = (length: number) =>
  Array.from({ length }, () =>
    Math.floor(Math.random() * 16).toString(36),
  ).join('');
