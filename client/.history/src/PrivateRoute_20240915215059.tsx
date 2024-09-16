import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import { getSession } from "./lib/axios";
import { AppDispatch } from "./store/store";

export default function PrivateRoute() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    //const {user, loading, error} = useAppSelector(authSelector);
    const user = getSession('user');
    useEffect(() => {

        if(user !== null) {
            //const token = getCookie('authorization');
            navigate('/tabCompetition');
            //navigate('/login');
        } else {
            navigate('/login');
        }

    }, []);

    if (!user) return null;

    return <LayoutMain />;

}