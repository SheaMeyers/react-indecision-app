'use strict';

console.log('App.js is running');

// only render the subtitle and p tag if subtitle exists -- use and operator
// render new p tag - if options.length > 0 'Here are your options' else 'No options' -- use teranary operator

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length ? 'Here are your options: ' + app.options : 'No options'
    )
);

var user = {
    name: 'Shea',
    age: 28,
    location: 'Voorburg'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    // Subtract one - rerender
    count--;
    renderCounterApp();
};

var reset = function reset() {
    // Set count to 0
    count = 0;
    renderCounterApp();
};

// Challenge
// Make button "-1" - set up minusOne function and register.  Log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
