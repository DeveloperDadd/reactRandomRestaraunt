import { getData } from "./data";

export default function Navbar () {
    const menus = ['Appetizers','Breakfast','Lunch','Dinner','Drinks']
    function handleClick() {
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