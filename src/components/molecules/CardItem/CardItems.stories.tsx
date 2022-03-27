import React from 'react';
import CardItem from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Molecules/Nav',
	component: CardItem,
	argTypes: {},
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = args => (
	<CardItem {...args} />
);

export const Authorized = Template.bind({});
Authorized.args = {};
