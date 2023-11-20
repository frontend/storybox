import { AlpineComponent } from 'alpinejs';

const data = () => ({
  open: false,

  // eslint-disable-next-line consistent-return
  toggle() {
    if (this.open) {
      return (this as AlpineComponent<any>).close();
    }
    (this as AlpineComponent<any>).$refs.button.focus();
    this.open = true;
  },

  close(focusAfter: HTMLDivElement) {
    if (!this.open) return;
    this.open = false;
    if (focusAfter) focusAfter.focus();
  },
});

export default data;
