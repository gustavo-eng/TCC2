import { Link, Outlet } from "react-router-dom";
import Logo from "../components/logo/Logo";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                <div className="lg:flex-shrink-0 lg:w-1/3 flex flex-col justify-between items-center bg-white lg:h-auto px-6 lg:px-16 h-screen overflow-y-auto">
                    <div className="flex items-center w-full justify-between pt-4">
                        <div className="flex-col w-1/2">
                            <Link to={'/login'}>
                                <Logo
                                    classNameImg="w-14 h-14"
                                    description={true}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* body */}
                <div className="bg-purple-400 flex flex-col justify-center items-start w-full">
                    <Outlet /> {/*aqui vai a rota de login */}
                </div>
                <div className="flex text-center justify-center items-center w-full pb-4">
                    <p className="text-black text-sm">
                        {new Date().getFullYear()} © {'rights_reserved'}
                        <a
                            //href={wegnologyFile(link)}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1 underline wep-colors-weg-1"
                        >
                            {'mfm_terms_of_use'}
                        </a>
                        <span className="ml-1">(develop)</span>
                    </p>
                </div>

            </div>
        </>
    )
}