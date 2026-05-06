import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des pokemons !</div>
      <div>
        <Pokemon name={"Carapuce"} id={7} />
        <Pokemon name={"Carabaffe"} id={8} />
        <Pokemon name={"Tortank"} id={9} />
      </div>
    </div>
  )
}
