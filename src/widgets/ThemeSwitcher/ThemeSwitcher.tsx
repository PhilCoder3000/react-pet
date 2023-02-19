import { useTheme } from 'app/providers/theme';
import DarkModeSvg from 'shared/assets/svg/theme/dark.svg';
import LightModeSvg from 'shared/assets/svg/theme/light.svg';
import { IconButton } from 'shared/ui/IconButton';
import classes from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {
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
