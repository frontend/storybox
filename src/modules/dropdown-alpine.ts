import data from '../components/atoms/DropdownAlpine/lib/data';

document.addEventListener('alpine:init', () => {
  window.Alpine.data('dropdown', () => data);
});
