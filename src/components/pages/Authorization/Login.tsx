import {useState} from "react";
import { Wrapper } from "../../../styles/styled-components/main/Main";
import {Navigate, NavLink } from "react-router-dom";
import {login} from "../../../redux/actions/authorization";
import { useDispatch, useSelector } from "react-redux";
import {Buttons, Input, Loading, LoginButton, SignUpButton } from "../../../styles/styled-components/authorization/Login";

const Login = () => {

    const dispatch = useDispatch<any>();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isAuth = useSelector((state: any) => state.authorizationn.isAuth)
    const isLoading = useSelector((state: any) => state.authorizationn.isLoading)

    const toLogIn = (email:string, password:string) => {
        dispatch(login(email, password))
    }

    if (isLoading) {
        return(
            <Loading>LOADING...</Loading>
        )
    }

    if (isAuth) {
        return (
            <Navigate to={'/authorization'}/>
        )
    }

    return(
        <Wrapper>
                <form>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Email"}/>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Password"}/>
                    <Buttons>
                        <LoginButton onClick={() => toLogIn(email, password)}>
                            {!isAuth ?
                                <NavLink to={'/authorization/login'}>login</NavLink> :
                                <NavLink to={'/authorization/me'}>login</NavLink>
                            }
                        </LoginButton>
                        <SignUpButton>
                            <NavLink to={'/authorization/signup'}>sign up</NavLink>
                        </SignUpButton>
                    </Buttons>
                </form>
        </Wrapper>
    )

}

export default Login;




