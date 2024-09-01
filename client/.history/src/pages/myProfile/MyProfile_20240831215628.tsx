import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div className="flex flex-col  items-center gap-3 bg-gray-200 w-1/2">
            <h1>Dados da conta</h1>
            <div className="flex flex-row w-full bg-green-300">
                <div className="w-[23px] h-[23px] bg-red-500 p-1 rounded-full"></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default MyProfile;