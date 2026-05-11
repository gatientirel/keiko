export const endpoints = {
  allPokemons: "/pokemons",
  pokemonPage: (pageNumber: number) => `/pokemons?page=${pageNumber}`,
  pokemonById: (pokemonId: number) => `/pokemon/${pokemonId}`
}
