import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const SearchInput: React.FC<InputProps> = ({ name }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(state => !state);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container
      isFocused={Number(isFocused)}
      isFilled={Number(isFilled)}
      aria-label="Search Bar"
    >
      <button type="submit" aria-label="Search Button">
        <FiSearch size={20} />
      </button>

      <input
        ref={inputRef}
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        placeholder="Procure por título"
      />
    </Container>
  );
};

export default SearchInput;
