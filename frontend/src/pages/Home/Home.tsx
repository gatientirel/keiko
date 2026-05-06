import { useCallback, useState, ChangeEvent, useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

export interface Pokemon {
  name: string
  id: number
}

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

const normalizeStr = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD") // separate diachritics
    .replace(/[\u0300-\u036f]/g, "") // keep only letters and numbers
    .replace(/[^a-z0-9]+/g, "-") // replace spaces by -
    .replace(/^-+|-+$/g, "") // remove trailing / starting -

function filterPokemonsByName(pokemons: Pokemon[], name: string) {
  return pokemons.filter(pokemon => normalizeStr(pokemon.name).includes(normalizeStr(name)))
}

const fetchPokemons = () =>
  fetch(`${BASE_URL_POKEMON_API}${endpoints.allPokemons}`, {
    headers: { accept: "application/json" },
  }).then(response => response.json())

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([])

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value), [])

  useEffect(() => {
    fetchPokemons().then(pokemonData => setPokemonList(pokemonData))
  }, [])

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des pokemons !</div>
      <label htmlFor={"input-pokemon-name"}>Pokemon Name</label>
      <input id={"input-pokemon-name"} className={styles.input} onChange={onInputChange} value={filterValue} />
      <div>
        {filterPokemonsByName(pokemonList, filterValue).map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
