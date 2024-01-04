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

const esbuild = require('esbuild');
const postcssPlugin = require('esbuild-plugin-postcss2').default;

const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

esbuild.build({
    entryPoints: ['src/js/main.js'],
    bundle: true,
    outdir: 'dist',
    plugins: [postcssPlugin({
        plugins: [
            postcssImport(),
            tailwindcss(),
            autoprefixer(),
        ],
    })],
}).catch(() => process.exit(1));