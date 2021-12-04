import React from 'react';
import { PageContainer } from '../../atoms'
import AboutHeader from './About.componens/AboutHeader'
import AboutSkills from './About.componens/AboutSkills'
import AboutPlans from './About.componens/AboutPlans'

const About = () => {
    return (
        <PageContainer>
            <AboutHeader />
            <AboutSkills />
            <AboutPlans />
        </PageContainer>
    );
};

export default About;