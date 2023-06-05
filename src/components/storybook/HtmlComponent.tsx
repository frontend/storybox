import React from 'react';
import * as ReactDomServer from 'react-dom/server';

type Props = {
  html: string;
  components: Record<string, React.ReactNode>;
};

const HtmlComponent = ({ html, components }: Props): JSX.Element => {
  const regex = new RegExp(Object.keys(components).join('|'), 'g');

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: html.replace(regex, match =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ReactDomServer.renderToStaticMarkup(components[match])
        ),
      }}
    />
  );
};

export default HtmlComponent;
