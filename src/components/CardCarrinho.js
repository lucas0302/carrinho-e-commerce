import styled from "styled-components"

export default function CardCarrinho({ produto, removerDoCarrinho }) {
  const { id, nome, preco, imagem } = produto

  return (
    <ItemCarrinho>
      <img src={imagem} alt={nome} />
      <div>
        <strong>{nome}</strong>
        <p>{preco}</p>
      </div>
      <button onClick={() => removerDoCarrinho(produto)}>X</button>
    </ItemCarrinho>
  )
}

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;