import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>

            {/* items-center justify-between*/}
            <main className="mt-10   flex  flex-row flex-wrap ">
                {Array.from({ length: 10 }, () => (
                    <div className=" mb-10 p-0 ">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;