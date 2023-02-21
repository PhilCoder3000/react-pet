export const getSvgLoader = () => ({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
