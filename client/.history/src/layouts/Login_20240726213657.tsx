import { Link, Outlet } from "react-router-dom";
import Logo from "../components/logo/Logo";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                {/* Left side form */}
                <div className="lg:flex-shrink-0 lg:w-1/3 flex flex-col justify-between items-center bg-white lg:h-auto px-6 lg:px-16 h-screen overflow-y-auto">
                    <div className="flex items-center w-full justify-between pt-4">
                        <div className="flex-col w-1/2">
                            <Link to={'/login'}>
                                <Logo className="" classNameImg="w-14 h-14" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* body */}
                <div className=" flex flex-col justify-center items-start w-full">
                    <Logo className="" classNameImg="w-14 h-14" />
                    <Outlet /> {/*aqui vai a rota de login */}
                </div>
            </div>
        </>
    )
}