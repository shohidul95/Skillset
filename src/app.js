import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <div className="container">
                {<p>Hello World!</p>}
            </div>
        </div>
    );
}

export default App;
