import { useSelector } from 'app/providers/store';
import { getAllPosts } from 'entities/posts';
import { PostDataType } from 'entities/posts/types';
import { selectUserAuth } from 'entities/user';
import { WriteNewPostBtn } from 'features/posts/WriteNewPostBtn';
import { Suspense } from 'react';
import { Post } from 'widgets/Post/Post';
import classes from './Main.module.scss';

let isPending = true;
let posts: PostDataType[] = [];
const getPosts = getAllPosts()
  .then((data) => {
    posts = data;
    return;
  })
  .catch((error) => {
    console.log('get post error:', error);
  })
  .finally(() => {
    isPending = false;
  });

export default function Main() {
  if (isPending) {
    throw getPosts;
  }

  const { isAuth, isPendingAuth } = useSelector(selectUserAuth);
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>left side</div>
      <div className={classes.center}>
        {posts.map(({  id, title, content }) => (
          <Post
            key={id}
            className={classes.post}
            title={title}
            content={content}
          />
        ))}
      </div>
      <div className={classes.rightSide}>
        <Suspense>{isAuth && !isPendingAuth && <WriteNewPostBtn />}</Suspense>
      </div>
    </div>
  );
}
