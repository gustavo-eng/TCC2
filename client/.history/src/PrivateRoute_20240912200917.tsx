import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector } from "./store/auth/authReducer";
import { AppDispatch } from "./store/store";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const selector = useAppSelector(authSelector);
    const {user, loading, error} = selector;
    console.log('-------------------------------------------')
    /*
    useEffect(() => {
        if(loading) return ;
        if(error !== null ) {
            navigate('/login');
            return;
        }
        if(user !== null) {
            const token = getCookie('authorization');
            if(token) {
                dispatch(login( { token } ));
                return;

            }
            navigate('/login');
        } else {

        }

    }, [dispatch, error, loading, navigate, user]);
    */
    console.log('user ', user)
    /*
    if (!user) {
        navigate('/login');
       //return  null
    }
    */

    return <LayoutMain />;

}