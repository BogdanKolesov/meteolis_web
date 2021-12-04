import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.colors.defaultPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
`


export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(${props => props.theme.media.albumTablet}){
        display: none;
    }
`

export const NavLink = styled(Link)`
    font-size: ${props => props.theme.sizes.fonts.medium};
    color: ${props => props.theme.colors.textPrimary};
    margin-right: 10px;
    border-bottom: 2px solid transparent;
    &:hover{
        border-color: ${props => props.theme.colors.textPrimary};
    }

`