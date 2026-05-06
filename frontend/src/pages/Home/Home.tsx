import { useCallback, useState, ChangeEvent } from "react"
import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

export interface Pokemon {
  name: string
  id: number
}

const pokemonList: Pokemon[] = [
  { name: "Carapuce", id: 7 },
  { name: "Carabaffe", id: 8 },
  { name: "Tortank", id: 9 },
]

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

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value), [])
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      <div>
        {filterPokemonsByName(pokemonList, filterValue).map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
