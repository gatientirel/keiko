import styles from "./Pokemon.module.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PokemonInfo } from "../Home"
import { DEFAULT_PAGE_POKEDEX, getPokemonById, MAX_POKEMON_ID, MIN_POKEMON_ID } from "../../utils"
import { Loader } from "../../components/Loader"
import { PokemonDetail } from "../../components/PokemonDetail"

const urlParamIsAcceptableId = (id?: string) => {
  if (!id) {
    return false
  }
  const castedId = Number(id)
  return !Number.isNaN(castedId) && castedId >= MIN_POKEMON_ID && castedId <= MAX_POKEMON_ID
}

export const Pokemon = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [isInError, setIsInError] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonInfo>()

  useEffect(() => {
    if (!urlParamIsAcceptableId) {
      navigate(`/pokedex/${DEFAULT_PAGE_POKEDEX}}`, { replace: true })
      return
    }
    getPokemonById(Number(params.id))
      .then(pokemonDetailData => setPokemon(pokemonDetailData))
      .catch(() => {
        setIsInError(true)
        setTimeout(() => navigate(`/pokedex/${DEFAULT_PAGE_POKEDEX}`), 1000)
      })
      .finally(() => setIsLoading(false))
  }, [params.id])
  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {isInError && <p className={styles.error_message}>Oops ! The Pokemon fled ! Back to the pokédex then... </p>}
      {pokemon && <PokemonDetail pokemon={pokemon} />}
    </div>
  )
}
