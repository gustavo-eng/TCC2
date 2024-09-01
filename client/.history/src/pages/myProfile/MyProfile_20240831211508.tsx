import { useNavigate } from "react-router-dom";

function MyProfile(){

    const handleBack = () => {
        navigate(-1);
    }

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={handleBack}>Voltar</button>
            My Profile Page
        </div>
    )
}

export default MyProfile;