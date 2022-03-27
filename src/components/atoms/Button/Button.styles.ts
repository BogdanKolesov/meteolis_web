import styled, { css } from 'styled-components';
import { primary, secondary } from '../../../themes/constants';
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
			color: ${({ color }) => color || primary};
			border: 1px solid ${props => props.color || primary};
		`};
	${props =>
		props.secondary &&
		css`
			color: ${props => props.color || secondary};
			border: 1px solid ${props => props.color || secondary};
		`};
`;
