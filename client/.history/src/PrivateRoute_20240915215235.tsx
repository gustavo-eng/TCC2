import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector } from "./store/auth/authReducer";
import { AppDispatch } from "./store/store";

export default function PrivateRoute() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    //const {user, loading, error} = useAppSelector(authSelector);
    //const user = getSession('user');
    const {user} = useAppSelector(authSelector);

    useEffect(() => {

        if(user !== null) {
            navigate('/tabCompetition');
        } else {
            navigate('/login');
        }

    }, []);

    if (!user) return null;

    return <LayoutMain />;

}