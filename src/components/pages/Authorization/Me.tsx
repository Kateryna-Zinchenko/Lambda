import { useDispatch, useSelector } from "react-redux";
import {Navigate, NavLink } from "react-router-dom";
import {logout} from "../../../redux/actions/authorization";
import {BackToMainButton, Buttons, LogOutButton, Profile} from "../../../styles/styled-components/authorization/Me";
import { Wrapper } from "../../../styles/styled-components/main/Main";

const Me = () => {
    const dispatch = useDispatch<any>();

    const isAuth = useSelector((state: any) => state.authorizationn.isAuth)

    const toLogOut = () => {
        dispatch(logout())
    }

    if (!isAuth) {
        return <Navigate to={'/authorization'}/>
    }

    return (
        <Wrapper>
            <Profile>
                Hello, this is your profile!
            </Profile>
            <Buttons>
                <BackToMainButton><NavLink to={'/'}>Main page</NavLink></BackToMainButton>
                <LogOutButton onClick={()=> toLogOut()}><NavLink to={'/authorization'}>Logout</NavLink></LogOutButton>
            </Buttons>
        </Wrapper>
    )
}

export default Me;