import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'components/organisms/Header';

const root = document.getElementById('uww-grid');

ReactDOM.render(<Header {...(root?.dataset)} />, root)
