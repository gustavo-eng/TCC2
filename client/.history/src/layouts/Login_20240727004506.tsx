import { Link, Outlet } from "react-router-dom";
import Logo from "../components/logo/Logo";
import ImageLogin from "../images/ImageLogin";



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
                {/* Right side - Image */}
                <div className="flex lg:flex-shrink-0  justify-center items-center">
                    <ImageLogin
                        src="https://files.wnology.io/65c4df1c76103c77e70938d2/images/coverImg_login.png"
                        title="WEG Motion Fleet Management"
                        description={'mfm_description'}
                    />
                </div>
            </div>
        </>
    )
}