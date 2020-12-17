import React from 'react';

export type Props = {
  primary?: boolean;
  size?: 'small' | 'medium';
  label: string;
  onClick?: () => void;
};

const Button = ({ primary, size, label, ...props }: Props): JSX.Element => {
  const color = primary ? 'indigo' : 'gray';

  const paddings = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-1';

      default:
        return 'px-5 py-3';
    }
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center ${paddings()} text-base font-medium text-white bg-${color}-600 border border-transparent rounded-md hover:bg-${color}-700`}
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
