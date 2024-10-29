import * as S from './styles'
import { Produto as ProdutoType } from './types'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  aoComprar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({
  produto,
  favoritar,
  aoComprar,
  estaNosFavoritos
}: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)}>
        {estaNosFavoritos
          ? '- Remover dos Favoritos'
          : '+ Adicionar aos Favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)}>
        Adicionar ao Carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
