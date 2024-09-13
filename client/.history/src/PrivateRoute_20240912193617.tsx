import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "typescript-cookie";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector, login } from "./store/auth/authReducer";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const selector = useAppSelector(authSelector);
    const {user, loading, error} = selector;

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
        }
        //if (!logged) return navigate('/login');
    }, []);

    //Posso passar a propriedade tabs
    //por parametro aqui

    if (logged) return <LayoutMain />

}