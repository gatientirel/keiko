import { useState, useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"
import { Loader } from "../../components/Loader"

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

const BASE_URL_POKEMON_API = "http://localhost:8000"
const endpoints = {
  allPokemons: "/pokemons",
}

const fetchPokemons = async () => {
  const response = await fetch(`${BASE_URL_POKEMON_API}${endpoints.allPokemons}`, {
    headers: { accept: "application/json" },
  })
  return await response.json()
}

export const Home = () => {
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPokemons().then(pokemonData => {
      setPokemonList(pokemonData)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={styles.intro}>
      <div>Pokédex !</div>
      <div className={styles.loader_container}>{isLoading && <Loader />}</div>
      <div className={styles.pokemon_cards_container}>
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
