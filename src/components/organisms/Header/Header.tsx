import React from 'react';

import Button from 'components/atoms/Button';

const Header = (): JSX.Element => (
  <header className="flex items-center justify-between p-4 bg-gray-50">
    <h1>Header</h1>
    <Button size="small">Login</Button>
  </header>
);

export default Header;
