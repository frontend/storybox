import React from 'react';

import CollapseReact, { Props } from './CollapseReact';

const doc = `
Collapse (react) is a React widget. To use it in your project, follow these steps:

**1**. Include the styles in the \`<head>\`:

\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

**2**. Include React and the following bundle before \`<body>\` tag's closing:

\`\`\`html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
<script src="collapse-vanilla.bundle.js"></script>
\`\`\`

**3**. Use it like so:

\`\`\`html
<div class="sb-collapse" data-label="Click me">
  [HTML content]
</div>
\`\`\`
`;

export default {
  title: 'Molecules/Collapse (react)',
  component: CollapseReact,
  parameters: {
    docs: {
      description: {
        component: doc,
      },
    },
  },
};

const Template = (args: Props) => <CollapseReact {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
  label: 'More content',
  children: `
    <p class="py-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Ergo, inquit, tibi Q. Duo Reges: constructio interrete. Ipse Epicurus fortasse redderet, ut [redacted]tus Peducaeus, [redacted]. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Illa videamus, quae a te de amicitia dicta sunt. An vero, inquit, quisquam potest probare, quod perceptfum, quod.
    </p>
  `,
};
