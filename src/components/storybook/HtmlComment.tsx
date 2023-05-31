import React from 'react';

// Helpers to render html source code
// Hack based on https://github.com/reactjs/rfcs/pull/129#issuecomment-1140379292

const HtmlComment = ({ children }: { children: React.ReactNode }) => (
  <script
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: `</script><!-- ${children} --><script>`,
    }}
  />
);

export const ComponentWrapper = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <HtmlComment>{`${name} Start`}</HtmlComment>
    {children}
    <HtmlComment>{`${name} End`}</HtmlComment>
  </>
);

export default HtmlComment;
