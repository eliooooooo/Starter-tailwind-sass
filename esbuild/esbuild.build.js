// const postCssPlugin = require('esbuild-style-plugin');

// require("esbuild")
//     .build({
//         logLevel: "debug",
//         entryPoints: ["./src/js/main.js"], // Make sure the paths are correct
//         bundle: true,
//         outdir: './dist',
//         loader: {
//             '.svg': 'file',
//             '.ttf': 'file',
//         },
//         minify: false,
//         plugins: [
//             postCssPlugin({
//                 plugins: [
//                     require('tailwindcss'),
//                     require('autoprefixer'),
//                     require('postcss-import')
//                 ]
//             })
//         ],
//     })
//     .then(result => { console.log('Js & css minifiés !!') })
//     .catch(() => process.exit(1))


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

const postCssPlugin = require("esbuild-style-plugin");

module.exports = {
  get: function() {
    return {
      logLevel: "debug",
      entryPoints: ["./src/js/main.js"],
      outdir: "dist",
      bundle: true,
      minify: false,
      loader: {
        ".svg": "file",
        ".otf": "file",
        ".eot": "file",
        ".woff": "file",
        ".woff2": "file"
      },
      plugins: [
        postCssPlugin({
          postcss: {
            plugins: [
              require("postcss-import"),
              require("tailwindcss/nesting"),
              require("tailwindcss"),
              require("autoprefixer")],
          },
        }),
      ],
    };
  }
}

const esbuild = require("esbuild");
const ctx = require("./esbuild.build.js").get();

async function build() {
  const context = await esbuild.context(ctx);

  await context
    .rebuild()
    .then(result => { console.log('Js & css minifiés !!') })
    .then(() => process.exit(1))
}

build();
