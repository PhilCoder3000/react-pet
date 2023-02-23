import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  const { html, root } = paths;

  const prodPlugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new Dotenv({
      path: path.resolve(root, '.env'),
      systemvars: true
    }),
  ];

  if (isDev) {
    const devPlugins = [
      new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.resolve(root, 'tsconfig.json'),
          diagnosticOptions: {
            syntactic: true,
            semantic: true,
            declaration: true,
            global: true,
          },
          mode: 'write-references',
        },
      }),
      new ESLintWebpackPlugin({
        overrideConfigFile: path.resolve(root, '.eslintrc.json'),
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ];

    return prodPlugins.concat(devPlugins);
  }

  return prodPlugins;
}
