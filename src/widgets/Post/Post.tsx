import classes from "./Post.module.scss";

interface PostProps {
  uuid?: string;
}

export function Post({
  uuid,
}: PostProps) {
  return (
    <div className={classes.container}>
      <h3>title</h3>
      <p>content</p>
      <div>
        <p>author</p>
        <p>created time</p>
      </div>
    </div>
  );
}
