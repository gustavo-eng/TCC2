import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3 bg-gray-200 w-1/2">
            <h1>DA</h1>
            <div>
                jifja
            </div>
            <div>

            </div>
        </div>
    )
}

export default MyProfile;