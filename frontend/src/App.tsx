import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Root } from "./components/Root"
import { Pokemon as PokemonDetailPage } from "./pages/Pokemon"
import { Home } from "./pages/Home"
import { useEffect, FC } from "react"
import { DEFAULT_PAGE_POKEDEX } from "./utils"

type RedirectComponentProps = {
  to: string
}
const RedirectComponent: FC<RedirectComponentProps> = ({ to }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  }, [navigate, to])
  return null
}

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectComponent to={`/pokedex/${DEFAULT_PAGE_POKEDEX}`} />} />
          <Route path={"/pokedex/:page"} element={<Home />} />
          <Route path={"/pokemon/:id"} element={<PokemonDetailPage />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
