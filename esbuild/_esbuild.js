// const postCssPlugin = require('esbuild-style-plugin');
// const sassPlugin = require('esbuild-sass-plugin').default;

// require('esbuild')
//   .build({
//     logLevel: 'debug',
//     entryPoints: ['src/js/main.js'],
//     outdir: 'dist',
//     bundle: true,
//     minify: false,
//     plugins: [
//       sassPlugin(),
//       postCssPlugin({
//         postcss: {
//           plugins: [require('tailwindcss'), require('autoprefixer')],
//         },
//       }),
//     ],
//   })
//   .then(result => { console.log('Js & css minifiés !!') })
//   .catch(() => process.exit(1))






// const sassPlugin = require('esbuild-sass-plugin').default;
// const postcss = require('esbuild-plugin-postcss');

// require("esbuild")
//     .build({
//         logLevel: "debug",
//         entryPoints: ["./src/js/main.js"],
//         bundle: true,
//         outdir: './dist',
//         loader: {
//             '.svg': 'file',
//             '.ttf': 'file',
//         },
//         minify: false,
//         plugins: [sassPlugin({ absWorkingDir: process.cwd() }), postcss.default({
//             plugins: [
//                 require('autoprefixer'),
//             ],
//         })],
//         watch: {
//             onRebuild(error, result) {
//                 if (error) console.error('Watch build failed:', error);
//                 else console.log('Watch build succeeded:', result);
//             },
//         },
//     })
//     .catch(() => process.exit(1))