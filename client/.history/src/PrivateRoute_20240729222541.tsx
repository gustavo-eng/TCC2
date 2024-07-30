import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) return navigate('/login');
    }, []);
    ///?tab=map

    if (logged) return navigate('/?tab=map');

}