import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector } from "./store/auth/authReducer";

export default function PrivateRoute() {

    const navigate = useNavigate();
    const { user } = useAppSelector(authSelector)
    //const user = getSession('user')
    useEffect(() => {
        if(user !== null) {
            navigate('/tabCompetition');
        } else {
            navigate('/login');
        };
    }, []);


    if (!user) return null;

    return <LayoutMain />;
}