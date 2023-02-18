import { useTheme } from 'app/providers/theme';
import { IconButton } from 'shared/ui/IconButton';
import LightModeSvg from 'shared/assets/svg/theme/light.svg';
import DarkModeSvg from 'shared/assets/svg/theme/dark.svg';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme, theme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      <div className={classes.container}>
        <div className={classes[theme]}>
          <DarkModeSvg />
          <LightModeSvg />
        </div>
      </div>
    </IconButton>
  );
}
