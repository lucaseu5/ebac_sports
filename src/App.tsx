import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { setProdutos } from './store/reducers/produtosSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProdutos(res)) // Atualiza o estado global dos produtos
      })
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
