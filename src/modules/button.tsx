import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/atoms/Button';
import { Props } from 'components/atoms/Button/Button';

const root = document.getElementById('sb-button');
const data = root?.dataset as Props;

ReactDOM.render(<Button {...data} />, root);

// Can be used like so:
// <head>
//   <link rel="stylesheet" href="styles.css">
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
// </head>
// <body>
//   <div id="sb-button" data-size="small" data-label="My button"></div>
//   <script src="button.bundle.js"></script>
// </body>
// </html>
