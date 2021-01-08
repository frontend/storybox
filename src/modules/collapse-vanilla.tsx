import toggleCollapse from 'components/molecules/CollapseVanilla/lib/toggleCollapse';

document.addEventListener('DOMContentLoaded', () => toggleCollapse());

// Can be used like so:
// <head>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <button
//     type="button"
//     class="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-base font-medium text-white border border-transparent rounded-md"
//     aria-expanded="false"
//     aria-controls="collapse-example"
//     data-collapse-target="collapse-example"
//   >
//     More content
//   </button>
//   <div id="collapse-example" class="collapse">
//     <p class="py-3">
//       [...]
//     </p>
//   </div>
//   <script src="collapse-vanilla.bundle.js"></script>
// </body>
