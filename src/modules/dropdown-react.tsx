import React from 'react';
import ReactDOM from 'react-dom';

import type { Props } from '../components/atoms/DropdownReact/DropdownReact';
import DropdownReact from '../components/atoms/DropdownReact/index';

const roots = document.querySelectorAll('.sb-dropdown');
roots.forEach(root => {
  if (root instanceof HTMLElement) {
    const data = root?.dataset as unknown as Props;
    const content = root?.innerHTML;
    ReactDOM.render(<DropdownReact {...data}>{content}</DropdownReact>, root);
  }
});

// Can be used like so:
// <head>
//   <link rel="stylesheet" href="styles.css">
//   <script
//     src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
//     integrity="sha512-8Q6Y9XnTbOE+JNvjBQwJ2H8S+UV4uA6hiRykhdtIyDYZ2TprdNmWOUaKdGzOhyr4dCyk287OejbPvwl7lrfqrQ=="
//     crossorigin="anonymous"
//     referrerpolicy="no-referrer"
//   ></script>
//   <script
//     src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
//     integrity="sha512-MOCpqoRoisCTwJ8vQQiciZv0qcpROCidek3GTFS6KTk2+y7munJIlKCVkFCYY+p3ErYFXCjmFjnfTTRSC1OHWQ=="
//     crossorigin="anonymous"
//     referrerpolicy="no-referrer"
//   ></script>
// </head>
// <body>
//   <div class="sb-dropdown" data-placeholder="My account" data-options="Profile,Settings,Logout"></div> <!-- bad idea ^^' -->
//   <script src="dropdown-react.bundle.js"></script>
// </body>
// </html>
