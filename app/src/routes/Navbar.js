import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {
    const [category, setCategory] = useState([category]);

    const menus = ['Appetizers','Breakfast','Lunch','Dinner','Drinks']

function handleClick() {
    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(res => {
                setCategory(res.data);
            })
    }, []); }
    
    return (
    <>
        <nav class="container-sm">
            <ul class="container-fluid .d-flex justify-content-center">
                {menus.map((menu) => (
                    <li key={menu}><button onClick={handleClick}>{menu}</button></li>
                ))}
            </ul>
        </nav>

        <div className="container-fluid">


        </div>
    </>
    )
}