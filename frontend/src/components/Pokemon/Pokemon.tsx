import styles from "./Pokemon.module.css"
import { PokemonInfo as PokemonType } from "../../pages/Home"
import { BASE_URL_SPRITE_POKEMON } from "../../utils"
import { Link } from "react-router-dom"

interface PokemonProps {
  pokemon: PokemonType
}

export const Pokemon = ({ pokemon: { name, id, weight, height } }: PokemonProps) => {
  return (
    <Link className={styles.card} to={`/pokemon/${id}`}>
      <p className={styles.pokemon_name}>{name}</p>
      <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </Link>
  )
}
