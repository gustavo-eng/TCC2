import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 w-1/2">

            <button onClick={handleBack}>Voltar</button>
            My Profile Page
        </div>
    )
}

export default MyProfile;