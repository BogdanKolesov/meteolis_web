import styled from 'styled-components'


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    color: ${props => props.theme.colors.textPrimary};
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
`
export const Title = styled.span`
    font-weight: 600;
`

export const Text = styled.span`
    font-weight: 300;
`
export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35vh;
    z-index: 0;
    object-fit: cover;
    border-radius: 5px;
`
export const ContentCartContainer = styled.div`
    margin: 50px;
    position: relative;
    width: 35%;
    min-width: 210px;
    height: 30vh;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        ${BackgroundImage}{
            filter: blur(2px);
        }
    }
`
