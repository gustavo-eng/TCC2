import { Outlet } from "react-router-dom";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                <div className="bg-green-400  flex flex-col justify-center items-start w-full">
                    <Outlet /> {/*aqui vai a rota de login */}
                </div>
            </div>
        </>
    )
}