import React from 'react';

export type Props = {
  primary?: boolean;
  size?: 'small' | 'medium';
  label: string;
  onClick?: () => void;
};

const Button = ({ primary, size, label, ...props }: Props): JSX.Element => {
  const colors = primary
    ? 'bg-indigo-600 hover:bg-indigo-700'
    : 'bg-gray-600 hover:bg-gray-700';

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
      className={`inline-flex items-center justify-center ${paddings()} ${colors} text-base font-medium text-white border border-transparent rounded-md`}
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
