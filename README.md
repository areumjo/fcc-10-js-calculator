# fcc-10-js-calculator
## React-Redux
This project is writted with React and React-Redux to have central state management throughout the app. And `Webpack` will be installed.

- Selling poins of Redux : [medium article](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)
    - Deterministic state resolution
    - Transactional state
    - Isolate state management from I/O and side-effects
    - Single source of truth for app state
    - Easily share state between different components
    - Transaction telemetry (auto-logging action objects)
    - Time travel debugging

- Redux is useful if your component:
    - uses I/O like network or device APIs
    - saves or loads state
    - shares its state with non-child components
    - Deals with any business logic or data processing shared with other parts of the app

### Redux: persisting the state to the `local storage`
```js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}


## Features
- It has basic calculation like MacOS version of calculation.
    - Operators : +, -, * %, +/-, C, =
    - Numbers : 0 - 10, . for decimal point
- In addition to basic one number display, it will show everything users type in the app and follow `formula/expression logic`
- There is a list of history data.

## Webpack
I am going to usd `Webpack` for this project.
- Webpack takes a bunch of different types of files (many `.js`, `.jpg`, `.png`, etc) and bundles them to smaller group of file through `loader`.
- It manages dependencies.
``` js
// dev mode
___webpack_require__(import React ...)
// after npm build will creat `build` dir ==> 
```

### webpack example with just js and html
- Follow along this [tutorial](https://www.youtube.com/watch?v=MpGLUVbqoYQ)
    - webpack example [react-color](https://github.com/Colt/react-colors) with React and a lot of dependencies 
```bash
# for webpack install
npm init -y
npm install --save-dev webpack webpack-cli
npm start
```
```js
// add it to package.json
"scripts": {
    "start": "webpack"
}
```

- `npm.start` will build `dist/mainjs` : wrapping code with some webpack magic
    - need to add it to bottom of html
    - `<script src="./dist/main.js"></script>`
- Import all the components to `index.j` with ES6

- Configuration
```js
// package.json
  "scripts": {
    "start": "webpack  --config webpack.config.js"
  },

// webpack.config.js
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}
```

- Loader : this enable webpack to grab all the different types of files other than js (above config is enough to do for js)
    - for `css-loader`, `style-loader`, first install them
    - css-loader : takes css and turn it into JS
    - style-loader : takes the transformted-JS and inject it to DOM using `<style>`
    ```js
    // webpack.config.js
    module: {
        rules: [
            {   test: /\.css$/,
                use: ["style-loader", "css-loader"] // this order matters
            }
        ]
    }
    // import it to index.js
    import "./main.css";
    ```
    
    - scss-loader : install scss-loader
    ```js
    module: {
        rules: [
            {   test: /\.scss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ]
            }
        ]
    }
    ```

- Cache busting, `HtmlWebpackPlugin`
    - `HtmlWebpackPlugin` : will automatically includes the correct script tag (new named) at the bottom of html 
        - `npm install  --save-dev html-webpack-plugin`
        - will edi in module.reports adding `plugins`
    - will create new `index.html` (short-lined) from dist directory
    - need to create `template.html`
    ```js
    // webpack.config.js
    var HtmlWebpackPlugin = require("html-webpack-plugin");
    module.exports = {
        mode: "development",
        entry: "./src/index.js",
        output: {
            filename: "main.[contentHash].js",
            path: path.resolve(__dirname, "dist")
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/template.html"
            })
    ```

- For production/developemnt : changed to 1) `webpack.comon.js` and added 2) `webpack.dev.js`, 3) `webpack.prod.js`
    ```js
    // package.json
    "scripts": {
        "start": "webpack-dev-server  --config webpack.dev.js --open",
        "build": "webpack --config webpack.prod.js"
    },
    ```
    - dev config ==> `npm start`
        - add `install npm webpack-dev-server` : dosen't have to re-starting (npm install) whenever you change code // doing everything in memory, don't actually make new directory
    ```js
    // webpack.dev.js
    const path = require("path");
    const common = require("./webpack.common");
    const merge = require("webpack-merge");

    module.exports = merge(common, {
    mode: "development", // change this to production
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }}
    ```

    - production config ==> `npm run build` : build new `build` directory etc

- `html-loader`
    - `npm install --save-dev, html-loader`
    - when you load any img file, import it to JS
    - will need `file-loader` as well 
    ```js
    // webpack.common.js
    {
        test: /\.html$/,
        use: ["html-loader"]
    },
    {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
                esModule: false,
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
            }
        }
    } // will create new imgs dir inside of dicrectory with hash name
    ```

- `clean-webpack-plugin` : clean out the `dist` dicrectory each time we build
    - add it to `webpack.prod.js` for production
    - so we only have one single js for bundling
    ```js
    const CleanWebpackPlugin = require("clean-webpack-plugin");
    ...
        plugins: [new CleanWebpackPlugin()]
    ...
    ```

- vendor : can add any other 3rd party libraries ==> now will have `main` file and `vendor` file

- `minicssextractplugin` : there will be a short flash meaning page first load everything without css and end of html it will get bootstrap styling ==> so add this plugin to `webpack.prod.js` (only for production, dev does not really need)
    - css will be added to the html header, link
    - optimize-css-assests-webpack-plugin : minify long css

- Minify JS in production (`TerseJS`) and html in production as well