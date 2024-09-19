import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import { getSession } from "./lib/axios";

export default function PrivateRoute() {

    const navigate = useNavigate();
    //const { user } = useAppSelector(authSelector)
    const user = getSession('user')
    useEffect(() => {
        if(user !== null) {
            navigate('/tabCompetition');
        } else {
            console.log('user em null', user )
            navigate('/login');
            //navigate('/');
        };
    }, []);

    if (!user) return null;

    return <LayoutMain />;
}