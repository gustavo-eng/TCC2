import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>
            {/* items-center justify-between*/}
            <main className="mt-10 ml-2  flex flex-wrap items-center ">
                {Array.from({ length: 10 }, () => (
                    <div className="ml-2 mb-2 flex flex-col items-center">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;