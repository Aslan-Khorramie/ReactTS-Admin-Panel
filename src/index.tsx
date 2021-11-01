import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import components
import ThemeWrapper from "./components/ThemeWrapper";

ReactDOM.render(
    <ThemeWrapper>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ThemeWrapper>,
    document.getElementById('root')
);
