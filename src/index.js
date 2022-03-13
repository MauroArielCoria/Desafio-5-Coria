//1) necesitamos la variable React en scope (ya no es obligatorio)
import React from 'react'

//2) necesitamos la variable ReactDOM en scope
import ReactDOM from 'react-dom'

//3) necesitamos un componente en scope
import App from './App.js'
import "./estilos.css"

//4) necesitamos poner el componente  en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))











