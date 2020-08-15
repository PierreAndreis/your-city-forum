import React, { useState, ChangeEvent, useCallback } from 'react';

import { Container } from './styles';

const Textarea: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      console.log(e.target.value);

      setMarkdown(e.target.value);
    },
    [],
  );

  return <Container onChange={handleChange} value={markdown} />;
};

export default Textarea;
