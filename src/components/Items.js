import React from "react";
import Item from "./Item.js"

export default function Items(props) {
    const { itemsData } = props;

    return (
        <div className="container">
            <ul className="items">
            {itemsData.map((itemData => (
                <li key={itemData._id}>
                    <Item name={itemData.name} price={itemData.price} description={itemData.description} />
                </li>
            )))}
            </ul>
        </div>
    )
} 