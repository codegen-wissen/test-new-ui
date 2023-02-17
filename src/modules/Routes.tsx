import { Switch, Route, Redirect } from "react-router-dom";

/*redux*/
import { shallowEqual, useSelector } from "react-redux";
/*redux*/

/*recoil*/
// import { useRecoilValue } from "recoil";
/*recoil*/

/*recoil*/
// import { isAuthorisedState } from "recoil/selectors/auth.selector";
/*recoil*/

import { AnimatedRouter } from '../core/animated-routes';

import Main from "./main/Main";
import Login from "./auth/pages/Login";

const Routes = () => {


    /*redux*/
    const { isAuthorized } = useSelector(
        ({ auth }: any) => ({
            isAuthorized: auth.user != null,
        }),
        shallowEqual
    );
    /*redux*/

    /*recoil*/
    // const { isAuthorized } = useRecoilValue(isAuthorisedState);
    /*recoil*/

    return (

        <Switch>

            <Route path="/auth/login">
                <AnimatedRouter key={1}><Login /></AnimatedRouter>
            </Route>
            <Route path="/">
                <AnimatedRouter key={2}><Main /></AnimatedRouter>
            </Route>
            <Route path="/logout" />
            <Route path="/error" />

            {
                !isAuthorized ? (
                    <Redirect to="/auth/login" />
                ) : (
                    <AnimatedRouter key={2}><Main /></AnimatedRouter>
                )
            }

        </Switch>
    )
}

export default Routes;