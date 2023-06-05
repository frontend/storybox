import clsx from 'clsx';

const toggleDropdown = (): void => {
  const dropdowns = document.querySelectorAll('.dropdown-wrapper');

  dropdowns.forEach(dropdown => {
    if (!dropdown.classList.contains('dropdown-ready')) {
      const button = dropdown.querySelector('button[aria-haspopup="true"]');
      const menu = dropdown.querySelector('[role="menu"]');
      const children: NodeListOf<HTMLElement> =
        dropdown.querySelectorAll('[role="menu"] > *');

      // Helper to navigate between children
      let focusIndex = 0;

      const hideDropdown = () => {
        menu?.classList.add('hidden');
        button?.setAttribute('aria-expanded', 'false');
        menu?.setAttribute('aria-hidden', 'true');
        focusIndex = 0;
      };

      const showDropdown = () => {
        menu?.classList.remove('hidden');
        button?.setAttribute('aria-expanded', 'true');
        menu?.removeAttribute('aria-hidden');
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (
          !menu?.contains(event.target as Node) &&
          !button?.contains(event.target as Node)
        ) {
          hideDropdown();
        }
      };

      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          hideDropdown();
        }

        if (event.key === 'ArrowDown') {
          event.preventDefault();

          if (children && children[focusIndex].nextSibling) {
            focusIndex += 1;
            children[focusIndex].focus();
          }
        }

        if (event.key === 'ArrowUp') {
          event.preventDefault();

          if (children && children[focusIndex].previousSibling) {
            focusIndex -= 1;
            children[focusIndex].focus();
          }
        }
      };

      button?.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          hideDropdown();
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleKeyPress);
        } else {
          showDropdown();
          document.addEventListener('mousedown', handleClickOutside);
          document.addEventListener('keydown', handleKeyPress);
          if (children) {
            children[0].focus();
          }
        }
      });

      dropdown.classList.add('dropdown-ready');
    }
  });
};

export default toggleDropdown;
