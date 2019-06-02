'use strict';

console.log('App.js is running');

// Create app object -- title and subtitle (both strings)
// Use title and subtitle in the template
// Render template

var appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    )
);

var user = {
    name: 'Shea',
    age: 28,
    location: 'Voorburg'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
