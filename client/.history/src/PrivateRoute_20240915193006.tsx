import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "typescript-cookie";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector, login } from "./store/auth/authReducer";
import { AppDispatch } from "./store/store";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {user, loading, error} = useAppSelector(authSelector);

    useEffect(() => {
        if(loading) return ;
        if(error !== null ) {
            navigate('/login');
            return;
        }
        if(user !== null) {
            const token = getCookie('authorization');

            if(token) {
                const result =  dispatch(login( { token } ));
                console.log('result do private ', result)
                return;

            }
            //navigate('/login');
        } else {

        }

    }, [dispatch, error, loading, navigate, user]);

    if (!user) return null;

    console.log('user  1555555', user)
    /*
    if (!user) {
        navigate('/login');
       //return  null
    }
    */

    return <LayoutMain />;

}