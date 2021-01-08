const toggleCollapse = (): void => {
  const collapses = document.querySelectorAll('[data-collapse-target]');

  collapses.forEach(collapse => {
    collapse.addEventListener('click', function (this: HTMLElement) {
      const targetID = this.getAttribute('data-collapse-target');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      this.setAttribute('aria-expanded', `${!isExpanded}`);
      if (targetID !== null) {
        document.getElementById(targetID)?.classList?.toggle('open');
      }
    });
  });
};

export default toggleCollapse;
