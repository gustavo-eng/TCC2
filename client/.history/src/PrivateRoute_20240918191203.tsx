import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector } from "./store/auth/authReducer";

export default function PrivateRoute() {

    const navigate = useNavigate();
    const {user} = useAppSelector(authSelector);

    useEffect(() => {
        if(user !== null) {
            navigate('/tabCompetition');
        } else {
            console.log('user em null', user )
            //navigate('/login');
            navigate('/');
        };
    }, []);

    if (!user) return null;

    return <LayoutMain />;
}