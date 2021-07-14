# Webpack 5 with web workers

When using relative paths in the webpack project web workers do not load extra chunks from the correct path


### Requirements
* nodejs
* yarn

## Starting the demonstration
``` bash
yarn install
yarn demo
```

Open your browser and devtools console then navigate to http://127.0.0.1:8000


## What to expect

You should see the two workers attempt to load a shared chunk from `http://127.0.0.1:8000/static/js/static/js/vendors-node_modules_lodash_lodash_js.js` instead of `http://127.0.0.1:8000/static/js/vendors-node_modules_lodash_lodash_js.js`


### Notes

* `self.location` within the web workers is `http://127.0.0.1:8000/static/js/`
