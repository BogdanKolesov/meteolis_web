import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoContent to='/'>
            Meteolis project
        </LogoContent>
    );
};

const LogoContent = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 600;
    span{
        font-weight: 400;
        text-transform: uppercase;
    }
`

export default Logo;