// require('babel-register')();

// var jsdom = require('jsdom').jsdom;

// var exposedProperties = ['window', 'navigator', 'document'];

// global.document = jsdom('');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

// global.navigator = {
//   userAgent: 'node.js'
// };

// documentRef = document;

// http://airbnb.io/enzyme/docs/api/index.html
// https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
// https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react