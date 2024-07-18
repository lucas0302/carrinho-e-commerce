import CardProduto from "./CardProduto"
import styled from "styled-components"

export default function ListaProduto({ produtos, adicionarAoCarrinho }) {

    return (
        <ContainerListaProdutos>
            {produtos.map((prod) => (
                <CardProduto
                    key={prod.id}
                    produto={prod}
                    adicionarAoCarrinho={adicionarAoCarrinho}
                />
            ))}
        </ContainerListaProdutos>
    )
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;