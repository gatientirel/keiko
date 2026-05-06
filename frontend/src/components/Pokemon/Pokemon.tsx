import styles from "./Pokemon.module.css"
import { PokemonInfo as PokemonType } from "../../pages/Home"

interface PokemonProps {
  pokemon: PokemonType
}

const BASE_URL_SPRITE_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

export const Pokemon = ({ pokemon: { name, id, weight, height } }: PokemonProps) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
