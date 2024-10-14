import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import SumarNumeros from './components/App/SumarNumeros';
import reportWebVitals from './reportWebVitals';
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/App/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contador/> */}
    <Car marca="Audi" modelo="Q3" aceleracion="25" velocidadmaxima="240" />
    <Car marca="Renault" modelo="Laguna" aceleracion="20" velocidadmaxima="180" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();