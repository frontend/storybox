import React from 'react';

type Props = {
  primary?: boolean,
  size?: 'small' | 'medium' | 'large',
  label: string,
  onClick?: () => void,
}

const Button = ({ primary, size, label, ...props }: Props): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
