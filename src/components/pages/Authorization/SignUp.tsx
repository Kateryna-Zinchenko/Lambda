import {useState} from "react";
import { signUp } from "../../../redux/actions/authorization";
import { useDispatch } from "react-redux";
import { Buttons, Input, SignUpButton } from "../../../styles/styled-components/authorization/SignUp";
import { Wrapper } from "../../../styles/styled-components/main/Main";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<any>();

    const toSignUp = (email:string, password:string) => {
        dispatch(signUp(email, password))
    }
    return(
        <Wrapper>
        <form>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Email"}/>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Password"}/>
            <Buttons>
                <SignUpButton onClick={() => toSignUp(email, password)}>
                    sign up
                </SignUpButton>
            </Buttons>
        </form>
        </Wrapper>
    )
}

export default SignUp;



