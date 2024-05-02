import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>


            <main className="mt-5">
                {Array.from({ length: 4 }, () => (
                    <Cards />
                ))}
            </main>

        </>
    )
}

export default Event;