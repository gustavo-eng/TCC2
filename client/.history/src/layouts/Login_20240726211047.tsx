import { Outlet } from "react-router-dom";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                {/* Left side form */}

                {/* body */}
                <div className=" flex flex-col justify-center items-start w-full">
                    <Outlet /> {/*aqui vai a rota de login */}
                </div>
            </div>
        </>
    )
}