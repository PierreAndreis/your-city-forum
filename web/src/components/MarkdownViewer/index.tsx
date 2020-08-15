import React, { memo } from 'react';
import { ReactMarkdownProps } from 'react-markdown';

import { Container } from './styles';

interface Props {
  source: string;
}

type MarkdownViewer = ReactMarkdownProps & Props;

const MarkdownViewer: React.FC<ReactMarkdownProps> = ({ source, ...rest }) => {
  return <Container source={source} {...rest} />;
};

export default memo(MarkdownViewer);
