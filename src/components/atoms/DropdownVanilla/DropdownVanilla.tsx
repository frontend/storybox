import React, { useEffect } from 'react';
import clsx from 'clsx';

import { ComponentWrapper } from '../../storybook/HtmlComment';
import Icon from '../Icon';

import toggleDropdown from './lib/toggle-dropdown';

type Props = {
  placeholder: string;
  options: string[];
};

const DropdownVanilla = ({ placeholder, options }: Props) => {
  useEffect(() => {
    toggleDropdown();
  }, []);

  return (
    <ComponentWrapper name="DropdownVanilla">
      <div className="relative inline-block text-left dropdown-wrapper">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-900 bg-white text-red-400-700 gap-x-1.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 [&[aria-expanded='true']>svg]:rotate-180"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            {placeholder}
            <Icon name="chevron-down" className="text-gray-400 !text-base" />
          </button>
        </div>

        <div
          className="absolute left-0 z-10 hidden w-56 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option, i) => (
              <a
                key={`#option-${option}`}
                href="/"
                role="menuitem"
                tabIndex={-1}
                className={clsx(
                  'text-gray-700 block px-4 py-2 text-sm',
                  i === 0 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                )}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DropdownVanilla;
