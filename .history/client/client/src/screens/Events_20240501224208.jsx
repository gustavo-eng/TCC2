import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>

            {/* items-center justify-between*/}
            <main className="mt-5 flex flex-wrap justify-between mb-10 ">
                {Array.from({ length: 4 }, () => (
                    <Cards />
                ))}
            </main>

        </>
    )
}

export default Event;