import React from 'react';
import { Logo, Wrapper } from '../../atoms';
import { FooterContainer, FooterContent } from './Footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper width='70%'>
                <Logo />
                <FooterContent>
                    Have a nice day! I glat to see You!
                </FooterContent>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;