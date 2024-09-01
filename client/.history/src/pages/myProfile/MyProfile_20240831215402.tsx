import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div className="bg-gray-200 w-1/2">

        </div>
    )
}

export default MyProfile;