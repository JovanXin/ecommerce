import React from "react";
import ReactDOM from "react-dom";
import Items from "./components/Items";


// For testing, will change into a SQL database eventually
const itemsData = [
    {
        name: "Eyeround",
        price: 15,
        description: "A juicy piece of eyeround"
    }, 
    {
        name: "Chicken Breast",
        price: 10,
        description: "Great protein on a budget"
    }
]

const App = () => (
  <div>
    <h1>Ecommerce</h1>
    <Items itemsData={itemsData}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));