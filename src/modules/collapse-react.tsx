import React from 'react';
import ReactDOM from 'react-dom';

import CollapseReact from 'components/molecules/CollapseReact';
import { Props } from 'components/molecules/CollapseReact/CollapseReact';

const roots = document.querySelectorAll('.sb-collapse');
roots.forEach(root => {
  if (root instanceof HTMLElement) {
    const data = root?.dataset as Props;
    const content = root?.innerHTML;
    ReactDOM.render(<CollapseReact {...data}>{content}</CollapseReact>, root);
  }
});

// Can be used like so:
// <head>
//   <link rel="stylesheet" href="styles.css">
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
// </head>
// <body>
//   <div id="sb-button" data-size="small" data-label="My button"></div> <!-- bad idea ^^' -->
//   <script src="button.bundle.js"></script>
// </body>
// </html>
