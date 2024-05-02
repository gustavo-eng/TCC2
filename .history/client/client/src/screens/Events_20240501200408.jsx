import React from "react";
import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>
            <Outlet />
            <h1>Esta na tela de eventos</h1>
            <Outlet />
        </>
    )
}

export default Event;