import React from "react";

export default function Item(props) {
    const { name, price } = props; 

    return (
        <div className="item-card">
            <div className="item-card__body">
                <h2 className="item=card__name">{name}</h2>
                <h2 className="item-card__price">{price}</h2>
            </div>
        </div>
    )
}