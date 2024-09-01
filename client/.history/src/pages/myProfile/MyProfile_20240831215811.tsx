import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div className="flex flex-col  items-center gap-3 bg-gray-200 w-1/2">
            <h1>Dados da conta</h1>
            <div className="flex flex-row text-center w-full bg-green-100">
                <h1>Gustavo Alexandre Dias </h1>
                <h1>Gustavo Alexandre Dias </h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default MyProfile;