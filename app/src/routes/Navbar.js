import { getData } from "./data";
import { useState, useEffect } from "react";

export default function Navbar () {
    const [category, setCategory] = useState([category]);
    
    const menus = ['Appetizers','Breakfast','Lunch','Dinner','Drinks']
    function handleClick() {
        getData();
    }
    return (
    <>
        <nav class="container-sm">
            <ul class="container-fluid .d-flex justify-content-center">
                {menus.map((menu) => (
                    <li key={menu}><button onClick={handleClick}>{menu}</button></li>
                ))}
            </ul>
        </nav>
    </>
    )
}