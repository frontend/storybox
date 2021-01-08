import React, { useEffect, useState } from 'react';

import Button from 'components/atoms/Button';

export type Props = {
  open?: boolean;
  label: string;
  children: string;
};

const CollapseReact = ({ open, label, children }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(open);

  useEffect(() => setExpanded(open), [open]);

  return (
    <>
      <Button
        primary
        aria-expanded={expanded}
        aria-controls="collapse-example"
        data-collapse-target="collapse-example"
        onClick={() => setExpanded(!expanded)}
      >
        {label}
      </Button>

      <div
        id="collapse-example"
        className={`overflow-hidden ${expanded ? 'h-auto' : 'h-0'}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
    </>
  );
};

CollapseReact.defaultProps = {};

export default CollapseReact;
