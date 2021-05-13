import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './logique/hooks/ProductProvider'
import CardProvider from './logique/hooks/CardProvider'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
