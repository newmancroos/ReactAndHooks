import React from 'react';
//import ReactDOM from 'react-dom';
import Menu from './components/menu';
import data from  './data/recipes.json'
import ReactDOM from "react-dom/client";

//render(<Menu recipes={data} />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu recipes={data} />
  </React.StrictMode>
);