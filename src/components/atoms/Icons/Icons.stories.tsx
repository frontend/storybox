import React from 'react';

import Icon from '../Icon';

import Icons, { iconList } from './Icons';

export default {
  title: 'Atoms/Icons',
  component: Icons,
};

const Template = () => (
  <>
    <Icons />
    <table className="table-auto">
      <tbody>
        {Object.keys(iconList).map(icon => (
          <tr key={`icon-listed-${icon}`}>
            <td className="px-4 py-2 border border-gray-200">
              <code>{icon}</code>
            </td>
            <td className="px-4 py-2 text-3xl border border-gray-200">
              <Icon name={icon} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export const List = Template.bind({});
