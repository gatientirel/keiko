import { useState, useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"
import { getAllPokemons } from "../../utils"
import { Loader } from "../../components/Loader"

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

export const Home = () => {
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isInError, setIsInError] = useState(false)

  useEffect(() => {
    getAllPokemons()
      .then(pokemonData => setPokemonList(pokemonData))
      .catch(() => {
        setIsInError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={styles.intro}>
      <h2>Pokédex !</h2>
      <div className={styles.query_state_info_container}>
        {isLoading && <Loader />}
        {isInError && (
          <p className={styles.error_message}>Oops ! All pokemons went missing because of some unknown event...</p>
        )}
      </div>
      <div className={styles.pokemon_cards_container}>
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
