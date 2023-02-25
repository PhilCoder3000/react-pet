import '../../src/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const themeDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  document.getElementsByTagName('body')[0].className = theme;

  return (
    <div style={{ padding: '10px' }}>
      <StoryFn />
    </div>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
  },
};

const portalDecorator = (StoryFn) => (
  <div>
    <div id="portal"></div>
    <StoryFn />
  </div>
);

export const decorators = [themeDecorator, portalDecorator];
