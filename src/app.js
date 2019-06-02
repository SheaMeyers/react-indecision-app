console.log('App.js is running');

// Create app object -- title and subtitle (both strings)
// Use title and subtitle in the template
// Render template

var appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
    </div>
);

var user = {
    name: 'Shea',
    age: 28,
    location: 'Voorburg'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
