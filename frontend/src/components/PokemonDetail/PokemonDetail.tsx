import styles from "./PokemonDetail.module.css"
import { PokemonInfo as PokemonType } from "../../pages/Home"
import { BASE_URL_SPRITE_POKEMON } from "../../utils"

interface PokemonDetailProps {
  pokemon: PokemonType
}

export const PokemonDetail = ({ pokemon: { name, id, weight, height } }: PokemonDetailProps) => {
  return (
    <div className={styles.column}>
      <p>{name}</p>
      <div className={styles.row}>
        <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
        <img src={`${BASE_URL_SPRITE_POKEMON}/back/${id}.png`} />
      </div>
      <div className={styles.row}>
        <img src={`${BASE_URL_SPRITE_POKEMON}/shiny/${id}.png`} />
        <img src={`${BASE_URL_SPRITE_POKEMON}/back/shiny/${id}.png`} />
      </div>
      <div className={styles.row}></div>

      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
