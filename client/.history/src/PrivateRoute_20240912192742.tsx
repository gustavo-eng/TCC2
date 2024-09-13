import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAppSelector from "./hooks/useAppSelector";
import LayoutMain from "./layouts/LayoutMain";
import { authSelector } from "./store/auth/authReducer";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useAppSelector(authSelector);

    useEffect(() => {
        if (!logged) return navigate('/login');
    }, []);

    //Posso passar a propriedade tabs
    //por parametro aqui

    if (logged) return <LayoutMain />

}