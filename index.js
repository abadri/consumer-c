const myModule = require('@abadri-test/my-yarn-test');

console.log(myModule.getFoo());

myModule.exports = {
  baz: 'three'
};