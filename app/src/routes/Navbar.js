import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {
    const [menuState, setMenuState] = useState([]);

    const menus = ['Appetizer','Breakfast','Lunch','Dinner','Drink']

    useEffect(() => {
        async function getData() {}
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(res => {
                setMenuState(res.data);
            })
    }, []); 

    const appetizers = menuState.filter((item) => item.category === 'Appetizer');
    const breakfast = menuState.filter((item) => item.category === 'Breakfast');
    const lunch = menuState.filter((item) => item.category === 'Lunch');
    const dinner = menuState.filter((item) => item.category === 'Dinner');
    const drinks = menuState.filter((item) => item.category === 'Drink');

    //button is clicked at top
    //setMenu = 
    //changes menu to whatever button is clicked


    function handleClick(category) {
        setMenuState(category)
    }

    return (
    <>
        <nav class="container-sm">
            <ul class="container-fluid .d-flex justify-content-center">
                <li><button onClick={handleClick(appetizers)}>{menus[0]}</button></li>
                <li><button onClick={handleClick}>{menus[1]}</button></li>
                <li><button onClick={handleClick}>{menus[2]}</button></li>
                <li><button onClick={handleClick}>{menus[3]}</button></li>
                <li><button onClick={handleClick}>{menus[4]}</button></li>
            </ul>
        </nav>

        <div className="container-fluid">
             {menuState.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h6>{item.description}</h6>
                    <h6>{item.category}</h6>
                    <h6>${item.price}</h6>
                </div>
             ))}       

        </div>
    </>
    )
}