import React from 'react';

import Header from 'components/organisms/Header';

const Page = (): JSX.Element => (
  <main className="container mx-auto homepage">
    <Header />

    <article className="mx-auto md:w-1/2">
      <h1 className="my-8 text-3xl font-bold">Pages in Storybook</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem
        degendae ratio maxime quidem illis placuit quieta. Et hunc idem dico,
        inquieta sed ad virtutes et ad vitia nihil interesse. Si quidem, inquit,
        tollerem, sed relinquo. Ut alios omittam, hunc appello, quem ille unum
        secutus est. -, sed ut hoc iudicaremus, non esse in iis partem maximam
        positam beate aut secus vivendi. Itaque a sapientia praecipitur se
        ipsam, si usus sit, sapiens ut relinquat. Restinguet citius, si ardentem
        acceperit. Duo Reges: constructio interrete. Quae quidem sapientes
        sequuntur duce natura tamquam videntes;
      </p>
    </article>
  </main>
);

export default Page;
