import Alpine from 'alpinejs';

const script = () => {
  console.log('yo');
  document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
      on: false,
      message: 'I ❤️ Burgers',
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
