import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) return navigate('/login');
    }, []);

    //Posso passar a propriedade tabs
    //por parametro aqui

    if (logged) return <LayoutMain />

}