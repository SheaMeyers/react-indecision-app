'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

//Create a templateTwo var JSX expression
// div
//  h1 -> Shea Meyers
//  p -> Age: 28
//  p -> Location: Voorburg
//Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Shea Meyers'
    ),
    React.createElement(
        'p',
        null,
        'Age: 28'
    ),
    React.createElement(
        'p',
        null,
        'Location: Voorburg'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
