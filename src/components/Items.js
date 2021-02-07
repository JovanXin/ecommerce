import React from "react";
import Item from "./Item.js"

export default function Items(props) {
    const { itemsData } = props;

    console.log(itemsData)

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