import Alpine from 'alpinejs';

const script = () => {
  document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
      on: false,
      message: 'I ❤️ Alpine',
      toggle() {
        console.log('toggle');
        this.on = !this.on;
      },
    });
  });

  window.Alpine = Alpine;
  Alpine.start();
};

export default script;
