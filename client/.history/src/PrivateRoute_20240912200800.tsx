import { useState } from "react";
import LayoutMain from "./layouts/LayoutMain";

export default function PrivateRoute() {

    const [logged, setLogged] = useState<boolean>(false);
    /*
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const selector = useAppSelector(authSelector);
    const {user, loading, error} = selector;
    console.log('-------------------------------------------')
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
    console.log('user ', user)
    if (!user) {
        //navigate('/login');
       return  null
    }
    */

    return <LayoutMain />;

}