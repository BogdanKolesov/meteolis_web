import React, { FC } from 'react';
import { StyledButton } from './Button.styles';

export enum ButtonSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export interface ButtonProps {
	backgroundColor?: string;
	size?: ButtonSize;
	color?: string;
	background?: string;
	label: string;
	bold?: boolean;
	primary?: boolean;
	secondary?: boolean;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	primary = false,
	secondary = false,
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
			background={background}
			secondary={secondary}>
			{label}
		</StyledButton>
	);
};

export default Button;
