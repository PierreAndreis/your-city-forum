import React, { memo } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface Props {
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: Record<string, unknown>;
}

type ButtonProps = JSX.IntrinsicElements['button'] & Props;

const Button: React.FC<ButtonProps> = props => {
  const { children, icon: Icon, containerStyle = {}, ...rest } = props;

  return (
    <Container style={containerStyle}>
      <button type="button" {...rest}>
        {children}
        {Icon && <Icon size={20} />}
      </button>
    </Container>
  );
};

export default memo(Button);
