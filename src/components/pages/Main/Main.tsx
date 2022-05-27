import { NavLink } from 'react-router-dom';
import {Blocks, Wrapper } from '../../../styles/styled-components/main/Main';

const Main = () => {
    return (
        <Wrapper>
            <Blocks>
                <NavLink to='/correctarium'>Correctarium</NavLink>
                <NavLink to='/authorization'>Authorization</NavLink>
            </Blocks>
        </Wrapper>
    );
};

export default Main;