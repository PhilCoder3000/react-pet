import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const { html, root } = paths;
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(root, "tsconfig.json"),
        diagnosticOptions: { syntactic: true, semantic: true, declaration: true, global: true },
        mode: "write-references",
      },
    }),
    isDev && new ESLintWebpackPlugin({
      overrideConfigFile: path.resolve(root, '.eslintrc.json'),
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    })
  ].filter(Boolean);
}
