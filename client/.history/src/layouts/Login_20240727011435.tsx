import { Link, Outlet } from "react-router-dom";
import Logo from "../components/logo/Logo";
import ImageLogin from "../images/ImageLogin";



export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>

                <div className="lg:flex-shrink-0 lg:w-1/3 flex flex-col justify-between items-center bg-white lg:h-auto px-6 lg:px-16 h-screen overflow-y-auto">

                    <div className="flex flex-col items-center w-full pt-16 ">
                        <div className="flex-col w-1/2 ">
                            <Link to={'/login'}>
                                <Logo
                                    classNameImg="w-14 h-14"
                                    description={true}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* body */}
                    <div className="flex flex-col justify-center items-start w-full">
                        <Outlet /> {/*aqui vai a rota de login */}
                    </div>
                    {/* Footer */}
                    <div className="flex text-center justify-center items-center w-full pb-4">
                        @CopyRigh gustavodias.2000@alunos.utfpr.edut.br
                    </div>
                </div>
                {/* Right side - Image */}
                <div className="flex lg:flex-shrink-0 lg:w-2/3 justify-center items-center">
                    <ImageLogin
                        src="https://static.wixstatic.com/media/a3903f_cf6643703c56467a94f7bc7da7cc80e0~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3903f_cf6643703c56467a94f7bc7da7cc80e0~mv2.jpg"
                        title="WEG Motion Fleet Management"
                        description={'Saber cada dia um pouco mais e usá-lo todos os dias para o bem, esse é o caminho dos verdadeiros judocas.'}
                        cite="Jigoro Kano"
                    />

                </div>
            </div>
        </>
    )
}