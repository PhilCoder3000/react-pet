import { AppRoutes } from 'app/types/pagesPaths';
import { writePost } from 'entities/posts';
import { NewPostDataType } from 'entities/posts/types';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Buttons/Button';
import { TextArea } from 'shared/ui/Inputs/TextArea';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { Title } from 'shared/ui/Text/Title';
import { useForm } from 'shared/utils/useForm/useForm';
import classes from './WritePostPage.module.scss';

export default function WritePostPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const createHandler = useCallback(
    async (value: NewPostDataType) => {
      setLoading(true);
      await writePost(value);
      setLoading(false);
      navigate(AppRoutes.MAIN);
    },
    [navigate],
  );

  const { value, changeHandler, submitHandler } = useForm<NewPostDataType>(
    {
      title: '',
      content: '',
    },
    createHandler,
    {
      title: {
        isRequired: true,
      },
      content: {
        isRequired: true,
      },
    },
  );

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title className={classes.title}>Write new post</Title>
        <TextInput
          name="title"
          value={value.title}
          onChange={changeHandler}
          disabled={isLoading}
          variant="outlined"
          containerClassName={classes.field}
          placeholder="post title"
        />
        <TextArea
          name="content"
          value={value.content}
          onChange={changeHandler}
          disabled={isLoading}
          variant="outlined"
          containerClassName={classes.field}
          placeholder="post content"
        />
        <Button
          onClick={submitHandler}
          isLoading={isLoading}
          className={classes.submitBtn}
        >
          Write
        </Button>
      </div>
    </div>
  );
}
