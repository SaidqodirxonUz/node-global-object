/**
 * Node.jsda global object
 * - Docs: https://nodejs.org/dist/latest-v18.x/docs/api/globals.html
 * - browser : window,
 * - node.js : global
 * - setTimeout
 * - setInterval
 * - setImmediate
 * - console
 */

console.log(global.console === console); // True
console.log(global.setTimeout === setTimeout); // True
console.log(global.setImmediate === setImmediate); // True

// var browser = 'Hello browser';
/** brauser */
// console.log(this.browser); // => 'Hello browser'
// console.log(window.browser); // => 'Hello browser'

/** node.js */
// console.log(this.browser); // undefined
// console.log(global.browser); // undefined
