console.log('App.js is running');

// only render the subtitle and p tag if subtitle exists -- use and operator
// render new p tag - if options.length > 0 'Here are your options' else 'No options' -- use teranary operator

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? 'Here are your options: ' + app.options : 'No options'}</p>
    </div>
);

const user = {
    name: 'Shea',
    age: 28,
    location: 'Voorburg'
};

function getLocation(location) {
  if (location){
      return <p>Location: {location}</p>;
  }
}

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    // Subtract one - rerender
    count--;
    renderCounterApp();
};

const reset = () => {
    // Set count to 0
    count = 0;
    renderCounterApp();
};

// Challenge
// Make button "-1" - set up minusOne function and register.  Log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();