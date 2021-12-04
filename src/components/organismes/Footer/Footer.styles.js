import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.defaultPrimary};
    width: 100%;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
`

export const FooterContent = styled.span`
    color: ${props => props.theme.colors.textPrimary};
    width: 60%;
    text-align: center;
    font-size: ${props => props.theme.sizes.fonts.medium};
    font-weight: 600;
`