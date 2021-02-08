import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";

// Still unsure where to get this data from/in which file
// const itemsData = [
//     {
//         _id: 1,
//         name: "Eyeround",
//         price: 15,
//         description: "A juicy piece of eyeround"
//     }, 
//     {
//         _id: 2,
//         name: "Chicken Breast",
//         price: 10,
//         description: "Great protein on a budget"
//     }
// ]

export default function Home() {
    const [itemsData, setItems] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try { 
                fetch("http://localhost:3001/items")
                .then(res => res.json())
                .then(res => setItems(res))
                .catch(err => console.error(err));
            } catch (err) {
                console.error(err.message)
            }
        };
        fetchData();
    }, [])

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