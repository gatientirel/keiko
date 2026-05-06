import styles from "../../pages/Home/Home.module.css"
import { Pokemon as PokemonType } from "../../pages/Home"

interface PokemonProps {
  pokemon: PokemonType
}

const BASE_URL_SPRITE_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

export const Pokemon = ({ pokemon: { name, id } }: PokemonProps) => {
  return (
    <div className={styles.intro}>
      <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
