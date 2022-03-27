import React, { FC } from 'react';

export interface CardItemProps {
	cardItemObj: object;
}

const CardItem: FC<CardItemProps> = ({ cardItemObj }: CardItemProps) => {
	return (
		<CardItemContainer>
			<img src={cardItemObj.image} />
			<a src={cardItemObj.link}>{cardItemObj.title}</a>
		</CardItemContainer>
	);
};

export default CardItem;
