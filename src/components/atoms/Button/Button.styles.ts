import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import { COLORS } from '../../../themes/constants';

export const StyledButton = styled.button<ButtonProps>`
	background: none;
	border: 1px solid ${COLORS.primaryText};
	font-size: 14px;
	padding: 5px;
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	${props =>
		props.size === 'large' &&
		css`
			padding-left: 20px;
			padding-right: 20px;
		`}
	${props =>
		props.primary &&
		css`
			color: ${({ color }) => color || COLORS.primary};
			border: 1px solid ${props => props.color || COLORS.primary};
		`};
	${props =>
		props.secondary &&
		css`
			color: ${props => props.color || COLORS.secondary};
			border: 1px solid ${props => props.color || COLORS.secondary};
		`};
`;
