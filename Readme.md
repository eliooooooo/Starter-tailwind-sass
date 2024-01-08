# Discover the TailwindCSS/Sass Starter pack

This is a Sass and TailwindCSS starter pack. It can be use with with any other technology.   
If you change the tree structure, remember to update the links in the `esbuild` files and `tailwind.config.js`.  
This package also contain `Alpinejs`. The `lando` environnement should be configured and ready to use.

## Requirements

This package is configurated for an WSL environnement. (https://learn.microsoft.com/en-us/windows/wsl/install)  
To use the `lando` feature, you have to install lando and docker in your environnement. (https://lando.dev/download)
The package is using npm, so you need a nodejs installation. (https://nodejs.org/en)

## Getting Started

Before getting started, you can clone this project or run following command:  
```bash
git clone https://github.com/eliooooooo/Starter-pack.git
```
Afterward, install dependencies and and compile the first styles :
```bash
npm install && npm run build
```
And run the development server.

## Features

To compile your assets, use the following commands :
```bash
# To compile for dev env
npm run build
# To compile for prod env
npm run prod
# To compile for each change 
npm run watch
```
You can clean your `dist` folder with :
```bash
npm run clean
```
When you add dependencies to your `package.json`, run this command to rebuild your dependencies :
```bash
npm run rebuild
```
To start the lando environnement :
```bash
lando start
```

<br />
<br />
Fell free to contribute to the project - every improvement is welcome! 😀 
