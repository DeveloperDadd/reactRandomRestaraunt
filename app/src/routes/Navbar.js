import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {
    const [menu, setMenu] = useState([]);

    const menus = ['Appetizers','Breakfast','Lunch','Dinner','Drinks']

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(res => {
                setMenu(res.data);
            })
    }, []); 

    return (
    <>
        <nav class="container-sm">
            <ul class="container-fluid .d-flex justify-content-center">
                {menus.map((menu) => (
                    <li key={menu}><button onClick={useEffect}>{menu}</button></li>
                ))}
            </ul>
        </nav>

        <div className="container-fluid">
             {menu.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h6>{item.description}</h6>
                    <h6>{item.category}</h6>
                    <h6>{item.price}</h6>
                </div>
             ))}       

        </div>
    </>
    )
}