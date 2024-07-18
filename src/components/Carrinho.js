import CardCarrinho from "./CardCarrinho"
import styled from "styled-components"

export default function Carrinho({ carrinho, removerDoCarrinho }) {
    return (
        <ContainerCarrinho carrinho={carrinho}>
            {carrinho.map((prodAdicionado) => (
                <CardCarrinho
                    key={prodAdicionado.id}
                    produto={prodAdicionado}
                    removerDoCarrinho={removerDoCarrinho}
                />
            ))}
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: ${props => props.carrinho.length === 0 ? "10px" : "22vw"};
  height: 99.5vh;
  position: absolute;
  right: 0;
`;