# CURSO DE WEBPACK

## INICIALIZAR PROYECTO
> git init
> npm init
> mkdir src
> cd src
> npm i -D webpack webpack-cli
> npx webpack  // al no instalarse webpack de forma global, para ejecutarlo necesitas usar npx

Este comando empaqueta, sin necesidad de ningún archivo de configuración, aunque con warning, el index.js y lo manda a 'dist/main.js', carpeta que no existía y ahora si.
Además ha reducido el código optimizándolo, porque para pasrale a una variable un texto no es necesario crear la variable...

> npx webpack --mode deveplopment

Ahora estamos en modo development y no nos crea ningún warning, como antes.

Sin embargo ahora el main.js ha cambiado, carga módulos y tiene una url por defecto para las rutas del proyecto:
sourceURL=webpack://02-curso-de-webpack-platzi/./src/index.js?

> npx webpack --mode production

Ahora con este comando en producción ,lo minifica al máximo, es decir hace un build simple.


si creamos otro fichero js en una carpeta dentro de src y ejecutamos un código como el del fichero './utils/sum.js', que exporta una función sum, y lo importamos en index.js podremos usarlo y al ejecutar de nuevo:

> npx webpack --mode production o > npx webpack --mode development  

hará el build, de cada archivo js que sea enlazado en el index.js con un import

De hecho, he creado otro llamado './utils/dismiss.js', que al no ser importado en index.js, no lo compila en el build.


## scripts

package.json
```
"scripts": [
        "build:dev": "rimraf ./dist && npx webpack --mode development",
        "build:prod": "rimraf ./dist && npx webpack --mode production"
]
```


## ESTRUCTURA DEL PROYECTO RECOMENDADA

    ./public
    ./public/index.html
    ./public/css
    ./public/assets
    ./public/assets/images
    ./public/assets/fonts

    ./src
    ./src/index.js
    ./src/js/



## Instalaciones

console
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

## soporte para ES6 and Beyond

Babel, traduce ES2015 y superiores a Vanilla js, también con polyfill, llega hasta los navegadores y versiones más antiguas

console
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
npm install --save @babel/polyfill core-js@3
```

Notes : These are the packages we will be using :

> @babel/core
This package, as the name would suggest, is the core package. The package is responsible for compiling javascript code and outputting usable code. By default it uses your local configuration, but we will get into that later on.

> @babel/preset-env
Knowing what browser supports what javascript feature is essential in transforming your code. Here is where preset-env comes in. It handles what transforms should be applied, based on your own input. You tell Babel: “I need support for these browsers” and it will transform your javascript so it will work on the list you provide.

> @babel/polyfill
Sometimes the browsers you want to support need a little extra help for certain features. @babel/polyfill will provide polyfills for those featured, based on what browsers you wish to support.

> babel-loader
Since we will be using Webpack, this package allows us to transpile our code using Babel and Webpack.

> core-js@3
It is a polyfill of the JavaScript standard library, which supports: The latest ECMAScript standard.



### configuración babel

.babelrc
```
{
  "presets": [
	  ["@babel/preset-env", {
      "useBuiltIns": "usage",
	    "debug": true,
      "corejs": 3
	  }]
	]
}
```


### SOPORTE PARA NAVEGADORES

Una vez instalado babel puedes indicarle al package.json esta configuración. si quieres dar soporte a diferentes navegadores según unas reglas.

```
"browserslist": [
  "> 1%",
  "not ie <= 9",
  "last 2 versions"
]
```

El 'browserlist documentation', está [aquí](https://browserl.ist/)


### EJEMPLO DE USO DE PARTICULARIDADES DE ECMA SCRIPT

Para usar lazy loading necesitamos añadir un plugin a babel

console
```
npm i -D @babel/plugin-syntax-dynamic-import
```
y añadir esto al babel coinfig

.babelrc
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "debug": true,
        "corejs": 3
      }
    ]
  ],
  "plugins": ["@babel/plugin-syntax-dynamic-import"] // lazy loading
}
```


example lazy loading
```
/**
* lazy-load-example.js
*/
export const lazyLoad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello from lazy load!"), 1000);
  });
}

/**
* index.js
*/
async function lazyLoadExample() {
  const { lazyLoad } = await import('./scripts/lazy-load-example');
  lazyLoad().then(res => console.log(res));
};

document.querySelector("#lazy-load").addEventListener('click', lazyLoadExample);
```



## SOPORTE PARA REACT .jsx

console
```
npm install -S react raect-dom
npm install -D @babel/preset-react
```

webpack.config.dev.js
```
          { // VANILLAJS y REACT
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
```

.babelrc   o  babel.config.json???  // DIFERENCIAS 
```
{
    "presets": [
        [
            [
              "@babel/preset-env",
              {
                "corejs": 3.29
                "useBuiltIns": "usage"
              }
            ],
            "@babel/preset-react" // si usas react 
        ]
      ]
  }
```

### SDOPORTE PARA TYPESCRIPT

console
```
npm install --save-dev typescript ts-loader
```





## CONFIGURANDO WEBPACK

webpack.config.dev.js
```
const path = require("path");

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, '../build'),
        compress: true,
        port: 3000,
        overlay: true,  // mas lento pero muestra los errores, de una forma más legible
    },
    devtool: 'cheap-module-eval-source-map',
};
```

## inject js in HTML

console
```
npm install --save-dev html-webpack-plugin
```

webpack.config.dev.js
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ...
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
```

## USO DE TYPESCRIPT

```
npm install --save-dev typescript ts-loader
```

tsconfig.json
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

webpack.config.dev.js
```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

// ESTO HAY QUE DARLE UNA VUELTA,  ver ejemplos reales en github, y cómo integrar un proyecto que iuse ambos, js, y ts



## USO DE LIBRERÍAS EXTERNAS

console
```
npm install moment
```

import { moment } form 'moment'

const now = moment.formt(HH:MM:ss);



## Support CSS, SCSS, ...

Vamos con el css primero

console
```
npm install --save-dev style-loader css-loader
```

webpack.config.dev|prod.js
```
//... others module configurations
{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
```


## Support SASS/SCSS

console
```
npm install --save-dev node-sass sass-loader
```

cambiamos algo en la configuración anterior

webpack.config.dev|prod.js
```
//... others module configurations
{
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
```

use css an scss files with out problem

example:

index.html
```
    <p class="css">Hello world! with css</p>
    <p class="scss">Hello world! with scss</p>
```

app-css.css
```
p.css {
    font-size: 1.5rem;
    color: red;
}
```

app-scss.scss
```
p {
    font-family: 'Courier New', Courier, monospace;
    &.scss {
        font-size: 2rem;
        color: green;
    }
}
```

main.cass
```
@import './styles/reset.css';
@import './styles/app-css.css';
@import './styles/app-scss.scss';
```

index.js
```
  ...
  // importando el main.css con js y además lo entiende gracias a babel y a los loaders de css y scss. Magia negra de webpack!!
  import './css/main.css';
  ...
```


## Otras cosas que podríamos añadir: 

### Add PostCSS/Autoprefixer
Install postcss-loader postcss-preset-env cssnano as Development Dependencies

console
```
npm install --save-dev postcss-loader postcss-preset-env cssnano
```

Notes : These are the packages we will be using :

postcss-loader
Loader for webpack to process CSS with PostCSS

postcss-preset-env
PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments, using cssdb. Also you can check Can I Use for browserlist.

css-nano
cssnano takes your nicely formatted CSS and runs it through many focused optimisations, to ensure that the final result is as small as possible for a production environment.

luego deberías crear el fichero de configuración para postcss

postcss.config.js
```
module.exports = {
  plugins: [
    require('postcss-preset-env')(),
    require('cssnano')(),
  ]
}
```

y  cambiar esto en nuestra configuración de webpack

```
  ...
  {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
  ...
```


## soporte para ficheros de imagenes

todo proyecto que se precie necesita imágenes del tipo que sea png, jpg y para cargarlas en el /build o el /dist meteremos este file-loader. El tratamiento será un poco diferente a los otros loaders que incrustaban código dentro del propio js. Ahora necesitamos crear una carpeta assets y llevar a llí los ficheros reales o comprimidos.


En versiones actuales de webpack, no es n inecesario recordarle que grabe las imágenes o las fuentes de texto, siempre que se encuentren dentro de una capeta ./assets, pero además si queremos configurar, ciertas cosas podemos indicárselo en las rules de esta manera.

webapck.config...
```
    { // IMAGES para copiarlas directamente,
        type: "asset",
        test: /\.(png|jpg|jpeg|gif)$/i
    }
```
para incluir los archivos que necesitemos y además las pequeñas de menos de 8kb las enbebe como base64 en el html.



## DIFERENTES CONFIGURACIONES

dependiendo del modo development  o modo production, tenemos dos configuraciones similares, que bueno sería tener una común para ambos y otras dos para cada uno de estos modos, esto lo podemos lograr con webpack-merge.

console
```
npm install -D webpack-merge
touch webpack.config.common.js
```

Ahora tenemos tres ficheros uno común y un opara cada modo, observa como están construidos y las pequeñas diferencias que tienen el dev y el prod

webpack.common.js
webpack.dev.js
webpack.prod.js

además hemos simplificado, los scripts a dos, uno para desarrollo que lanza el dist en un navegador y el de producción que nos devuelve la carpeta /dist con todo.

> npm build  // generará el compilado y ...
> npm start  // lanzará el servidor de desarrollo que se actualiza cada vez que relizamos cambios


## source maps
para poder debugear en el navegador

eval-source-map para desarrollo

source-map  para producción

webpack.dev.js
```
  ...
  devtool: "eval-source-map" 
```

webpack.prod.js
```
  ...
  devtool: "source-map" 
```

si vamos al navegador y miramos en los sources en herramientas de desarrollador veremos el código bien limpito.

buscas el archivo en cuestión por ejemplo app[hash].jsx, este será el original


## OPTIMIZATION IN PRODUCTION

console
```
npm i mini-css-extract-plugin -D
```

webpack.prod.js
```
mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: "source-map", // para debugear en etapas de stagging, no en produccion
    optimization: {
        splitChunks: {  // separa cada archivo o librerias en diferentes archivos.js
            chunks: "all"
        }
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{ // STYLES para entender y cargar los estilos dentro del js
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader, // extrae los estilos embebidos en el html a archivos css
                'css-loader',
                'sass-loader'
            ]
        }, ]
    },
```

webpack.dev.js
```
module: {
        rules: [{ // STYLES para entender y cargar los estilos dentro del js
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader', // embebe los estilos en el html 
                'css-loader',
                'sass-loader'
            ]
        }, ]
    },
```





## Extras

Para react existe un par de plugins de desarrollo para webpack, que impiden que el estado del navegador se pierda, eso está bien para que si estamos rellenando un formulario enorme y hacemos cambios en el código, no se pierdan los vlaores del formulario

console
```
npm install @pmmmwh/react-refresh-webpack-plugin @react/hot-module-replacement-plugin --save-dev

webpack.dev.js
```
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
  ...
  devSever: {
    ...
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin() 
  ]
```



