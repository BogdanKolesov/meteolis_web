import React, { useRef, useEffect, useState } from 'react';
import { onScrollChange } from '../../../functions/onScrollChange';
import { Logo } from '../../atoms';
import { NavContainer, NavLinks, NavLink } from './Nav.styles';

const Nav = ({ navData }) => {

    const navRef = useRef()
    onScrollChange(navRef, 50)
    return (
        <NavContainer ref={navRef}>
            <Logo />
            <NavLinks>
                {
                    navData.map((item, index) => (
                        <NavLink to={item.path} key={index}>{item.text}</NavLink>
                    ))
                }
            </NavLinks>
        </NavContainer>
    );
};

export default Nav;