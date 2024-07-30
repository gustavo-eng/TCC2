import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./layouts/LayoutMain";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) return navigate('/login');
    }, []);


    if (logged) return <Main />

}