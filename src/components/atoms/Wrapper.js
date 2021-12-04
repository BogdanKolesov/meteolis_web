import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${(props) => (props.width ? props.width : '100%')};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default Wrapper