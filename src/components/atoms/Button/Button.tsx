import React, { FC } from 'react';
import { StyledButton } from './Button.styles';

export enum ButtonSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: ButtonSize;
	label: string;
	bold?: boolean;
	onClick?: () => void;
	color?: string;
	background?: string;
}

const Button: FC<ButtonProps> = ({
	primary = false,
	size = ButtonSize.medium,
	backgroundColor,
	label,
	bold = false,
	color,
	background,
}: ButtonProps) => {
	return (
		<StyledButton
			primary={primary}
			size={size}
			bold={bold}
			color={color}
			background={background}>
			{label}
		</StyledButton>
	);
};

export default Button;
