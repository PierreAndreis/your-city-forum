import React, { ChangeEvent, useCallback, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
  value: string;
  retrieveValue(mdValue: string): void;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = props => {
  const { name, placeholder, retrieveValue, value } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField } = useField(name);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
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
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
