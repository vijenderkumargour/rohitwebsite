    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import { BrowserRouter } from 'react-router-dom';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import '../src/css/style.css';  
 
    


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter >
        <App />
        </BrowserRouter>
      </React.StrictMode>
    );


    reportWebVitals();
