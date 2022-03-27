import styled, { css } from 'styled-components';
import { primary } from '../../../themes/constants';
export const NavContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${primary};
	height: 30px;
	padding: 5px;
`;

export const NavLogo = styled.span`
	color: #fff;
`;

export const NavLinks = styled.div`
	a {
		color: #fff;
		margin-right: 10px;
		cursor: pointer;
		position: relative;

		&:after {
			position: absolute;
			content: '';
			bottom: -3px;
			right: 0;
			height: 2px;
			width: 100%;
		}

		&:hover {
			&:after {
				background-color: #fff;
			}
		}
	}
`;
