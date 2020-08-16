import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const SearchInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <input ref={inputRef} type="text" defaultValue={defaultValue} {...rest} />
  );
};

export default SearchInput;
