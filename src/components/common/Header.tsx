import { styled } from 'styled-components';

function Header() {
    return (
        <HeaderStyle>
            <h1>book store</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    /* 구조분해할당 */
    /* background-color: ${(props) => props.theme.color.background}; */
    background-color: ${({theme}) => theme.color.background};

    h1 {
        color: ${({theme}) => theme.color.primary}
    }
`

export default Header;