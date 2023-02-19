import classes from "./PageLoader.module.scss";

export function PageLoader() {
  return (
    <div className={classes.container}>
      <span className={classes.loader}></span>
    </div>
  );
}
