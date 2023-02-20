import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

export const getScssLoader = ({ isDev }: BuildOptions) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});
