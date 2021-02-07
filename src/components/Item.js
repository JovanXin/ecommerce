import React from "react";

export default function Item(props) {
    const { name, price, description } = props; 

    return (
        <div className="item">
            <div className="item__body">
                <h2 className="item__name">{name}</h2>
                <h2 className="item__price">{price}</h2>
                <p className="item__description">{description}</p>
            </div>
        </div>
    )
}