import React from "react";
import Header from "../components/Header";
const Event = () => {
    return (
        <>
            <Header />
            <Outlet />
            <h1>Esta na tela de eventos</h1>
        </>
    )
}

export default Event;