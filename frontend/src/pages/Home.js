import React from "react";
import ItemCard from "../components/ItemCard";

// Still unsure where to get this data from/in which file
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

export default function Home() {
    return (
        <div className="container">
            <ul className="items">
            {itemsData.map((itemsData => (
                <li key={itemsData._id}>
                    <ItemCard name={itemsData.name} price={itemsData.price} description={itemsData.description} />
                </li>
            )))}
            </ul>
        </div>
    )
} 