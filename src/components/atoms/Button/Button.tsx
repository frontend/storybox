import React from 'react';
import './Button.css';

type Props = {
  primary?: boolean,
  size?: 'small' | 'medium' | 'large',
  label: string,
  onClick?: () => void,
}

const Button = ({ primary, size, label, ...props }: Props): JSX.Element => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
