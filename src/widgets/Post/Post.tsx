import { classnames } from 'shared/utils/classnames/classnames';
import classes from './Post.module.scss';

interface PostProps {
  title: string;
  content: string;
  className?: string;
}

export function Post({ title, content, className }: PostProps) {
  return (
    <div className={classnames(classes.container, className)}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
