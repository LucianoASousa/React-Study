import Logo from '../../assets/Logo.svg'
import { Container, Content } from './style'

export function Header() {
    return(
        <Container>
            <Content>
            <img src={Logo} alt="dt money" />
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}