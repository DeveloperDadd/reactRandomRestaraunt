import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {
    const [menuState, setMenuState] = useState([]);

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
    const menuData = [appetizers, breakfast, lunch, dinner, drinks];

    function changeApp () {
        setMenuState(appetizers);
    }
    function changeBreak () {
        setMenuState(breakfast);
    }
    function changeLunch () {
        setMenuState(lunch);
    }
    function changeDin () {
        setMenuState(dinner);
    }
    function changeDrink () {
        setMenuState(drinks);
    }

    return (
    <>
        <nav class="container-sm">
            <ul class="container-fluid .d-flex justify-content-center">
                <li><button onClick={changeApp}>Appetizers</button></li>
                <li><button onClick={changeBreak}>Breakfast</button></li>
                <li><button onClick={changeLunch}>Lunch</button></li>
                <li><button onClick={changeDin}>Dinner</button></li>
                <li><button onClick={changeDrink}>Drinks</button></li>
            </ul>
        </nav>

        <div className="container-fluid text-center">
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