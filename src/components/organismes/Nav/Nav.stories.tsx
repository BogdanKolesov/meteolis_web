import React from 'react';
import Nav from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavVariants } from './Nav';

export default {
	title: 'Organizmes/Nav',
	component: Nav,
	argTypes: {},
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = args => <Nav {...args} />;

export const Authorized = Template.bind({});
Authorized.args = {
	authorized: true,
};

export const Light = Template.bind({});
Authorized.args = {
	variant: NavVariants.light,
};

export const Dark = Template.bind({});
Authorized.args = {
	variant: NavVariants.dark,
};
