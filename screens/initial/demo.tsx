import React from 'react';

type Props = {
  message: string;
};

export const Demo = (props: Props) => {
  const { message } = props;

  return (
    <div>
      {message}
    </div>
  );
};

// <Demo message="hello" />
