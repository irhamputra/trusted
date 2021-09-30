import { FormEvent, FC, CSSProperties, useState } from 'react';

interface FormProps {
  label?: string;
  submitText?: string;
  style?: {
    button?: CSSProperties;
    input?: CSSProperties;
  };
}

export const Form: FC<FormProps> = ({ label, style, submitText }) => {
  const [comment, setComment] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: add backend
    console.log(comment);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="comment">{label || 'Comment'}</label>
        <input
          style={style?.input}
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
      </div>
      <button type="submit" style={style?.button}>
        {submitText || 'Submit'}
      </button>
    </form>
  );
};
