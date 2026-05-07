import { useState, useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"
import { DEFAULT_PAGE_POKEDEX, getPokemonsByPage, MAX_POKEDEX_PAGE, MIN_POKEDEX_PAGE } from "../../utils"
import { Loader } from "../../components/Loader"
import { useNavigate, useParams } from "react-router-dom"
import { PokedexPageNavigationButton } from "../../components/PokedexPageNavigationButton"

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

const urlParamIsAcceptablePageNumber = (pageNumber?: number) => {
  if (!pageNumber) {
    return false
  }
  const castedPageNumber = Number(pageNumber)
  return !Number.isNaN(castedPageNumber)
}

export const Home = () => {
  const params = useParams()
  const currentPageParam = Number(params.page)
  const navigate = useNavigate()
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isInError, setIsInError] = useState(false)

  useEffect(() => {
    if (!urlParamIsAcceptablePageNumber(currentPageParam)) {
      setIsLoading(false)
      setIsInError(true)
      setTimeout(() => navigate(`/pokedex/${DEFAULT_PAGE_POKEDEX}`, { replace: true }))
      return
    }
    getPokemonsByPage(currentPageParam)
      .then(pokemonData => setPokemonList(pokemonData))
      .catch(() => {
        setIsInError(true)
        setTimeout(() => navigate(`/pokedex/${DEFAULT_PAGE_POKEDEX}`, { replace: true }))
      })
      .finally(() => setIsLoading(false))
  }, [currentPageParam])

  return (
    <div className={styles.intro}>
      <h2>Pokédex !</h2>
      <div className={styles.query_state_info_container}>
        {isLoading && <Loader />}
        {isInError && (
          <p className={styles.error_message}>Oops ! All pokemons went missing because of some unknown event...</p>
        )}
      </div>
      <div className={styles.pokedex_navigation_container}>
        <PokedexPageNavigationButton
          type={"prev"}
          disabled={currentPageParam <= MIN_POKEDEX_PAGE}
          targetPage={currentPageParam - 1}
        />
        <PokedexPageNavigationButton
          type={"next"}
          disabled={currentPageParam >= MAX_POKEDEX_PAGE}
          targetPage={currentPageParam + 1}
        />
      </div>
      <div className={styles.pokemon_cards_container}>
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
