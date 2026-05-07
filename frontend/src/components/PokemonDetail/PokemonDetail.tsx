import styles from "./PokemonDetail.module.css"
import { PokemonInfo as PokemonType } from "../../pages/Home"
import { BASE_URL_SPRITE_POKEMON, POKEDEX_PAGE_SIZE } from "../../utils"
import { Link } from "react-router-dom"
import ArrowLeftIcon from "./arrow-left.svg"

interface PokemonDetailProps {
  pokemon: PokemonType
}

export const PokemonDetail = ({ pokemon: { name, id, weight, height } }: PokemonDetailProps) => {
  return (
    <div className={styles.column}>
      <div className={styles.detail_header}>
        <Link className={styles.back_to_pokedex_icon_container} to={`/pokedex/${Math.floor(id / POKEDEX_PAGE_SIZE)}`}>
          <img src={ArrowLeftIcon} alt={"left-arrow-icon"} />
        </Link>
        <p className={styles.pokemon_name}>{name}</p>
      </div>
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
