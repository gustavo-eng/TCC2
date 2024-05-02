import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>

            {Array.from({ length: 4 }, () => (
                <Cards />
            ))}

        </>
    )
}

export default Event;