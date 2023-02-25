import { useTheme } from 'app/providers/theme';
import { memo } from 'react';
import DarkModeSvg from 'shared/assets/svg/theme/dark.svg';
import LightModeSvg from 'shared/assets/svg/theme/light.svg';
import { IconButton } from 'shared/ui/IconButtons/IconButton';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} className={className}>
      <div className={classes.container}>
        <div className={classes[theme]}>
          <DarkModeSvg />
          <LightModeSvg />
        </div>
      </div>
    </IconButton>
  );
});
