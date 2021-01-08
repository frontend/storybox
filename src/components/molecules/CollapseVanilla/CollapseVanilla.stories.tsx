import React from 'react';

import CollapseVanilla from './CollapseVanilla';

const doc = `
Collapse (vanilla) is a zero-dependency JavaScript widget. To use it in your project, follow these steps:

**1**. Include the styles in the \`<head>\`:

\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

**2**. Include the following bundle before \`<body>\` tag's closing:

\`\`\`html
<script src="collapse-vanilla.bundle.js"></script>
\`\`\`

**3**. Use it like so:

\`\`\`html
<button
  type="button"
  class="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-base font-medium text-white border border-transparent rounded-md"
  aria-expanded="false"
  aria-controls="collapse-example"
  data-collapse-target="collapse-example"
>
  See more
</button>

<div id="collapse-example" class="collapse">
  Your content
</div>
\`\`\`
`;

export default {
  title: 'Molecules/Collapse (vanilla)',
  component: CollapseVanilla,
  parameters: {
    docs: {
      description: {
        component: doc,
      },
    },
  },
};

const Template = () => <CollapseVanilla />;

export const Default = Template.bind({});
