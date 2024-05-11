import React from "react";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>

            {/* items-center justify-between*/}
            <main className="mt-10 mx-auto w-screen flex flex-row flex-wrap">
                {Array.from({ length: 5 }, () => (
                    <div className=" mb-10 ml-2 mr-1 ">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;