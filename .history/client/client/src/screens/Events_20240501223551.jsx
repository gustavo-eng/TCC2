import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>
            {/*<Outlet/> */}
            <h1>Esta na tela de eventos</h1>
            {Array.from({ length: 2 }, () => {
                <Cards />
            })}
        </>
    )
}

export default Event;