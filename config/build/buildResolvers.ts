import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({
  paths,
}: BuildOptions): webpack.ResolveOptions {
  const { src } = paths;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
