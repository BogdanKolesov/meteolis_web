import styled from 'styled-components';


const Button = styled.button`
    background: transparent;
    border: none;
    font-size: ${({ bigText }) => (bigText ? '16px' : '14px')};
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: ${({ round }) => (round ? '8px' : 0)};
`

export default Button;

