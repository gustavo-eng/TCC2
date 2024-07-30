import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) navigate('/login');
    }, []);


}