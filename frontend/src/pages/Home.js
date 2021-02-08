import React, { useEffect, useState } from "react";

import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            fetch("http://localhost:3001/items")
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(err => setError(err.message))
            .then(setLoading(false));
        };
        fetchData();
    }, [])

    return (
        <div>
        {loading ? ( <Loading></Loading>
        ) : error ? ( <MessageBox varient="ERROR">{error}</MessageBox>
        ) : (
            <div className="container">
                <ul className="items">
                {itemsData.map((itemsData => (
                    <li key={itemsData._id}>
                        <ItemCard name={itemsData.name} price={itemsData.price} description={itemsData.description} />
                    </li>
                )))}
                </ul>
            </div>
        )}
        </div>
    )
} 