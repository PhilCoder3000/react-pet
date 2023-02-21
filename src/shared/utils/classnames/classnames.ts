type ClassnamesArgs = string | string[] | Record<string, boolean>;

export const classnames = (...args: ClassnamesArgs[]): string =>
  args.reduce<string>((prev, current) => {
    if (!current) {
      return prev;
    }
    if (typeof current === 'string') {
      return `${prev} ${current}`;
    }
    if (Array.isArray(current)) {
      const classes = current.filter(Boolean)
      if (classes.length > 0) {
        return `${prev} ${classes.join(' ')}`;
      }
      return prev
    }
    if (typeof current === 'object') {
      const objClasses = Object.entries(current).reduce<string>(
        (prev, [classes, value]) => (value ? `${prev} ${classes}` : prev),
        '',
      ).trim();
      return `${prev} ${objClasses}`
    }
    return prev;
  }, '').trim();
