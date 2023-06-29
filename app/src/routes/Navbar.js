import { MouseEvent } from "react";

export default function Navbar () {
    const menus = ['Appetizers','Pasta','Sandwiches','Desserts','Beverages']
    function handleClick(event: MouseEvent) {
        getData();
    }
    return (
    <>
        <nav>
            <ul>
                {menus.map((menu) => (
                    <li key={menu}><button onClick={handleClick}>{menu}</button></li>
                ))}
            </ul>
        </nav>
    </>
    )
}