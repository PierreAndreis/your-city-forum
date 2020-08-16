import React, {
  useState,
  ChangeEvent,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
  retrieveValue(mdValue: string): void;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = props => {
  const { name, placeholder, retrieveValue } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const [markdown, setMarkdown] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      setMarkdown(e.target.value);
      retrieveValue(e.target.value);
    },
    [retrieveValue],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container
      ref={textAreaRef}
      onChange={handleChange}
      value={markdown}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
