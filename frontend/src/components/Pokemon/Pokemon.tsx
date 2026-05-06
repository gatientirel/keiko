import styles from "../../pages/Home/Home.module.css"

interface PokemonProps {
  name: string
  id: string | number
}

const BASE_URL_SPRITE_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

export const Pokemon = ({ name, id }: PokemonProps) => {
  return (
    <div className={styles.intro}>
      <img src={`${BASE_URL_SPRITE_POKEMON}/${id}.png`} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
