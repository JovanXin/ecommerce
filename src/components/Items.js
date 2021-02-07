import React from "react";
import Item from "./Item.js"

export default function Items(props) {
    const { itemsData } = props;

    return (
        <div className="container">
            {itemsData.map((itemData => (
                <Item name={itemData.name} price={itemData.price} description={itemData.description} />
            )))}
        </div>
    )
} 