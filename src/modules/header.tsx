import React from 'react';
import ReactDOM from 'react-dom';

import Icon from 'components/atoms/Icon';

const root = document.getElementById('uww-grid');

ReactDOM.render(<Icon {...root?.dataset} />, root);
