import path from 'path';
import { Configuration } from 'webpack';
import { buildResolvers } from '../build/buildResolvers';
import { getScssLoader } from '../build/loaders/getScssLoader';
import { getSvgLoader } from '../build/loaders/getSvgLoader';
import { BuildOptions, BuildPaths } from '../build/types/config';

const paths: BuildPaths = {
  html: '',
  build: '',
  entry: '',
  root: '',
  src: path.resolve(__dirname, '..', '..', 'src'),
};

const options: BuildOptions = {
  mode: 'development',
  port: 3000,
  isDev: true,
  paths,
};

export default ({ config }: { config: Configuration }) => {
  const fileLoaderRule = config.module?.rules?.find(
    // @ts-ignore
    (rule) => rule.test && rule.test.test('.svg'),
  );
  // @ts-ignore
  fileLoaderRule?.exclude = /\.svg$/;

  config.resolve = buildResolvers(options);
  config.module?.rules?.push(getScssLoader(options));
  config.module?.rules?.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('@svgr/webpack'),
  });
  return config;
};
