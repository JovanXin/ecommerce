import React from "react";
import Item from "./Item.js"

const itemsData = [
    {
        _id: 1,
        name: "Eyeround",
        price: 15,
        description: "A juicy piece of eyeround"
    }, 
    {
        _id: 2,
        name: "Chicken Breast",
        price: 10,
        description: "Great protein on a budget"
    }
]

export default function Items() {
    return (
        <div className="container">
            <ul className="items">
            {itemsData.map((itemsData => (
                <li key={itemsData._id}>
                    <Item name={itemsData.name} price={itemsData.price} description={itemsData.description} />
                </li>
            )))}
            </ul>
        </div>
    )
} 