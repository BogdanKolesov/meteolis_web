import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../data/navData';
import { NavContainer, NavLinks, NavLogo } from './Nav.styles';

export interface NavProps {
	variant?: string;
	authorized: boolean;
}

const Nav: FC<NavProps> = ({ variant = 'light', authorized }: NavProps) => {
	return (
		<NavContainer variant={variant} authorized={authorized}>
			<NavLogo>Meteolis project</NavLogo>
			<NavLinks>
				{navData.map((data, index) => (
					<a key={index} src={data.link}>
						{data.ru}
					</a>
				))}
			</NavLinks>
		</NavContainer>
	);
};

export default Nav;
