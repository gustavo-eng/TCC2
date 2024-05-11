import React from "react";
import { default as SearchDate, default as SearchDate2 } from "../components";
import Cards from "../components/Cards";
//import { Outlet } from 'react-router-dom';
const Event = () => {
    return (
        <>
            <SearchDate />
            <SearchDate2 />
            {/* items-center justify-between*/}
            <main className="mt-10 mx-auto w-screen flex flex-row flex-wrap">

                {Array.from({ length: 2 }, () => (
                    <div className=" mb-10 ml-2 mr-1 ">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;