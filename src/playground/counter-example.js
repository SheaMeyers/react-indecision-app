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