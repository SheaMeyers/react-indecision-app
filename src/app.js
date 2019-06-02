console.log('App.js is running');

// only render the subtitle and p tag if subtitle exists -- use and operator
// render new p tag - if options.length > 0 'Here are your options' else 'No options' -- use teranary operator

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? 'Here are your options: ' + app.options : 'No options'}</p>
    </div>
);

var user = {
    name: 'Shea',
    age: 28,
    location: 'Voorburg'
};

function getLocation(location) {
  if (location){
      return <p>Location: {location}</p>;
  }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
