import React from "react";
import ReactDOM from "react-dom";
import Items from "./components/Items";


// For testing, will change into a SQL database eventually
const itemsData = [
    {
        id: 1,
        name: "Eyeround",
        price: 15,
        description: "A juicy piece of eyeround"
    }, 
    {
        id: 2,
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