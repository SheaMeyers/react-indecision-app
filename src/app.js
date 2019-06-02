console.log('App.js is running');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

//Create a templateTwo var JSX expression
// div
//  h1 -> Shea Meyers
//  p -> Age: 28
//  p -> Location: Voorburg
//Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>Shea Meyers</h1>
        <p>Age: 28</p>
        <p>Location: Voorburg</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);