import { Outlet } from "react-router-dom";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                {/* Left side form */}
                <div className="lg:flex-shrink-0 lg:w-1/3 flex flex-col justify-between items-center bg-white lg:h-auto px-6 lg:px-16 h-screen overflow-y-auto">

                </div>
                {/* body */}
                <div className=" flex flex-col justify-center items-start w-full">
                    <Outlet /> {/*aqui vai a rota de login */}
                </div>
            </div>
        </>
    )
}