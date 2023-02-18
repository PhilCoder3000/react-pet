type ClassnamesArgs = string | string[] | Record<string, boolean>;

export const classnames = (...args: ClassnamesArgs[]): string =>
  args.reduce<string>((prev, current) => {
    console.log('🚀 ~ file: classnames.ts:5 ~ prev', prev);
    if (!current) {
      return prev;
    }
    if (typeof current === 'string') {
      return `${prev} ${current}`;
    }
    if (Array.isArray(current)) {
      return `${prev} ${current.join(' ')}`;
    }
    if (typeof current === 'object') {
      const objClasses = Object.entries(current).reduce<string>(
        (prev, [classes, value]) => (value ? `${prev} ${classes}` : prev),
        '',
      ).trim();
      return `${prev} ${objClasses}`
    }
    return prev;
  }, '');
