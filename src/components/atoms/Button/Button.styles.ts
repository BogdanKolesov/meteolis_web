import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
	background: none;
	border: none;
	font-size: 14px;
	padding: 5px;
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	${props =>
		props.size == 'large' &&
		css`
			padding-left: 20px;
			padding-right: 20px;
		`}
	${props =>
		props.primary &&
		css`
			color: ${props => props.color || 'green'};
			border: 1px solid ${props => props.color || 'green'};
		`};
`;
