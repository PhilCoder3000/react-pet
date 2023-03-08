import { AppRoutes } from 'app/types/pagesPaths';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Buttons/Button';

export const WriteNewPostBtn = memo(() => {
  const navigate = useNavigate();
  const toWritePostPage = () => navigate(AppRoutes.WRITE_POST_PAGE);
  return (
    <Button variant="contained" onClick={toWritePostPage}>
      Write new post
    </Button>
  );
});
