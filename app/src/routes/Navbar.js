export default function Navbar () {
    const menus = ['Appetizers','Pasta','Sandwiches','Desserts','Beverages']
    
    return (
    <>
        <nav>
            <ul>
                {menus.map((menu) => (
                    <li><button>{menu}</button></li>
                ))}
            </ul>
        </nav>
    </>
    )
}