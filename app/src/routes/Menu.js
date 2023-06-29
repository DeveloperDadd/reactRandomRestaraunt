import { useState, useEffect } from "react";
import { getData } from "./data";

export default function Menu () {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        let data = getData();
    }, [category]);

    return(
        <>
        
        
        </>
    )
}