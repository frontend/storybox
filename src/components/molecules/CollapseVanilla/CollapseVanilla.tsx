import React, { useEffect } from 'react';

import Button from 'components/atoms/Button';

import toggleCollapse from './lib/toggleCollapse';

const CollapseVanilla = (): JSX.Element => {
  useEffect(() => toggleCollapse(), []);

  return (
    <>
      <Button
        primary
        aria-expanded="false"
        aria-controls="collapse-example"
        data-collapse-target="collapse-example"
      >
        More content
      </Button>
      <div id="collapse-example" className="collapse">
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem
          satis est, eo quicquid accessit, nimium est; Cupiditates non Epicuri
          divisione finiebat, sed sua satietate. Sin laboramus, quis est, qui
          alienae modum statuat industriae? Duo Reges: constructio interrete.
          Dici enim nihil potest verius. Cuius quidem, quoniam Stoicus fuit,
          sententia condemnata mihi videtur esse inanitas ista verborum. Quamvis
          enim depravatae non sint, pravae tamen esse possunt. Varietates autem
          iniurasque fortunae facile veteres philosophorum praeceptis instituta
          vita superabat. Atque haec ita iustitiae propria sunt, ut sint
          virtutum reliquarum communia. Quod si ita se habeat, non possit beatam
          praestare vitam sapientia. Hoc enim identidem dicitis, non intellegere
          nos quam dicatis voluptatem.
        </p>
      </div>
    </>
  );
};

CollapseVanilla.defaultProps = {};

export default CollapseVanilla;
