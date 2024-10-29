import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'
import { adicionarAoCarrinho } from '../store/reducers/carrinhoSlice'
import {
  adicionarFavorito,
  removerFavorito
} from '../store/reducers/favoritosSlice'
import * as S from './styles'
import { RootState } from '../store'
import { Produto as ProdutoType } from '../components/Produto/types'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.produtos.itens)
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  const produtoEstaNoCarrinho = (produto: ProdutoType) => {
    return itensNoCarrinho.some((item) => item.id === produto.id)
  }

  const handleFavoritar = (produto: ProdutoType) => {
    if (produtoEstaNosFavoritos(produto)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    if (produtoEstaNoCarrinho(produto)) {
      alert('Este produto já está no carrinho!')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={handleFavoritar}
          aoComprar={handleAdicionarAoCarrinho}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
