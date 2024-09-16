import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import { getSession } from "./lib/axios";
import { AppDispatch } from "./store/store";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    //const {user, loading, error} = useAppSelector(authSelector);
    const user = getSession('user');
    useEffect(() => {

        if(user !== null) {
            //const token = getCookie('authorization');
            navigate('/');
            //navigate('/login');
        } else {
            navigate('/login');
        }

    }, [dispatch, user]);

    if (!user) return null;

    console.log('user  1555555', user)

    return <LayoutMain />;

}