let showDetails = false;

const onShowDetailsClick = () => {
    showDetails = !showDetails;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetailsClick}>{showDetails ? 'Hide details' : 'Show details'}</button>
            {showDetails && (
                <div>
                    <p>Hey, here are the details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();