import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

const pokemonList = [
  { name: "Carapuce", id: 7 },
  { name: "Carabaffe", id: 8 },
  { name: "Tortank", id: 9 },
]

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des pokemons !</div>
      <div>
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} />
        ))}
      </div>
    </div>
  )
}
