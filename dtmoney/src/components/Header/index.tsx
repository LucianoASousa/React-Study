import Logo from '../../assets/Logo.svg'

import { Container, Content } from './style'

interface Headerprops {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: Headerprops) {

    return(
        <Container>
            <Content>
            <img src={Logo} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
            </Content>
        </Container>
    )
}