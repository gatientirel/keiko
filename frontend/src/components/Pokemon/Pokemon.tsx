import styles from "./Pokemon.module.css"
import { PokemonInfo as PokemonType } from "../../pages/Home"
import { BASE_URL_SPRITE_POKEMON } from "../../utils"

interface PokemonProps {
  pokemon: PokemonType
}

export const Pokemon = ({ pokemon: { name, id, weight, height } }: PokemonProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.pokemon_name}>{name}</p>
      <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
