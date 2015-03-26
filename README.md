# paperdi
Paper DI brings simple class which may help you to inject or select objects!

## Install
To install, simply run the command `npm install paperdi` and if you want to save into your `package.json`, just put `--save` flag as well.

## Usage.

To use the paperdi, you just have to `require` the module and done!.

```javascript
var di = require('paperdi');

// inject your values.
di.inject('hello', 'world');
di.inject('foo', 'bar');
di.inject('obj', {});
di.inject('imarray', [1, 2]);

// Pass the di object to your other modules. i.e
require('./my/module/')(di);
myFunction(di);
comeBack(di, function() {
  // Used for async.
});

// To retrieve back
var hello = di.select('hello'); // returns world.
var giveMyObjectBack = di.select('obj'); // becomes {}
```
