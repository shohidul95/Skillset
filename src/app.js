import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <div className="container">
                {/* content goes here */}
            </div>
        </div>
    );
}

export default App;
