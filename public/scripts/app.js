'use strict';

var showDetails = false;

var onShowDetailsClick = function onShowDetailsClick() {
    showDetails = !showDetails;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetailsClick },
            showDetails ? 'Hide details' : 'Show details'
        ),
        showDetails && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, here are the details'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
