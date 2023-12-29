import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {
    const [menu, setMenu] = useState([]);
    const [appetizers, setAppetizers] = useState([]);
    const [breakfast, setBreakfast] = useState([])
    const [lunch, setLunch] = useState([])
    const [dinner, setDinner] = useState([])
    const [drinks, setDrinks] = useState([])
    const [currentMenu, setCurrentMenu] = useState([]);
    

    useEffect(() => {
        async function getData() {
          try {
            const res = await axios.get("./menuData.json");
            setMenu(res.data);
            setCurrentMenu(res.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        getData(); // Call the getData function
    
      }, []);
    
useEffect(() => {
    setAppetizers(menu.filter((item) => item.category === 'Appetizer'));
    setBreakfast(menu.filter((item) => item.category === 'Breakfast'));
    setLunch(menu.filter((item) => item.category === 'Lunch'));
    setDinner(menu.filter((item) => item.category === 'Dinner'));
    setDrinks(menu.filter((item) => item.category === 'Drink'));
    }, [menu]);

const menus = ['Appetizers','Breakfast','Lunch','Dinner','Drinks'];

function handleClick(e) {
    console.log('clicked');
    if (e.target.id === menus[0]) {
        setCurrentMenu(appetizers);
    } else if (e.target.id === menus[1]) {
        setCurrentMenu(breakfast);
    } else if (e.target.id === menus[2]) {
        setCurrentMenu(lunch);
    } else if (e.target.id === menus[3]) {
        setCurrentMenu(dinner);
    } else if (e.target.id === menus[4]) {
        setCurrentMenu(drinks);
    }
}

    return (
    <>
        <nav className="container-sm">
            <ul className="container-fluid .d-flex justify-content-center">
                {menus.map((item) => {
                    return <li key={item}><button id={item} onClick={handleClick}>{item}</button></li>
                })}
            </ul>
        </nav>

        <div className="container-fluid text-center">
             {currentMenu.map(item => (
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