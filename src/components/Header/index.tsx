import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //é vazio.. nao recebe nada e nao retorna nada
}


export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
            </button>
            </Content>
        </Container>
    );
}