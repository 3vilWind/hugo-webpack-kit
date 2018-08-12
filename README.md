# Hugo Webpack Kit

**This is a boilerplate for hugo with "pure" webpack configuration.**

## Features
* JS transpiling using babel-preset-env
* JS + CSS bundling
* SASS compiling

### Production Mode
* JS & CSS minification
* Cache busting

### Development Mode
* Sourcemaps
* Live-reloading by hugo server

##Installation
1. [NPM](https://www.npmjs.com/get-npm) & [NodeJS](https://nodejs.org/en/download/), [Hugo](https://gohugo.io/) have to be installed in your system.
1. Clone this repo.
1. `npm install`

##Usage
`npm run server` to start development server.

`npm run build` to build for production.

##Structure
```
├── src                                 // All sites`s sources
│   ├── archetypes                      // Templates used when creating new content (Hugo)
│   ├── assets                          // Static files that will be processed by webpack
│   │   ├── css
│   │   │   └── styles.css              // Default entry point for CSS bundle
│   │   ├── js
│   │   │   └── main.js                 // Default entry point for JS bundle
│   │   └── sass
│   │       └── styles.sass             // Default entry point for SASS compiling and CSS bundle
│   ├── config.toml                     // Default config (Hugo)
│   ├── content                         // All content for your website (Hugo)
│   ├── data                            // Configuration files (Hugo)
│   ├── layouts                         // Templates (Hugo)
│   │   └── _default
│   │       └── baseof.html             // Example template which shows how to connect bundles to html
│   ├── resources                       // Images, other pages, documents etc (Hugo)
|   |── static                          // 
│   └── themes                          // Themes (Hugo)
├── webpack.config.common.js            // Common webpack config (you can change here entry points and public directory)
├── webpack.config.development.js       // Development webpack config (you can change additional arguments for hugo server)
└── webpack.config.production.js        // Production webpack config (you can change additional arguments for hugo)
```

## Contribution
Pull Requests are welcome!
