import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>
            {/* items-center justify-between*/}
            <main className="mt-5 ml-2  flex flex-wrap items-center ">
                {Array.from({ length: 4 }, () => (
                    <div className="ml-2 mb-5">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;