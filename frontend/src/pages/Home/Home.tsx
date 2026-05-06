import styles from "./Home.module.css"

const BASE_URL_SPRITE_POKEMON = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des pokemons !</div>
      <div>
        <img src={`${BASE_URL_SPRITE_POKEMON}/7.png`} />
        <p>Name: Carapuce</p>
        <p>Number: 7</p>
      </div>
    </div>
  )
}
