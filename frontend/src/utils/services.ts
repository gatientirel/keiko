import { BASE_URL_POKEMON_API } from "./constants"
import { endpoints } from "./endpoints"

export const getAllPokemons = async () => {
  const response = await fetch(`${BASE_URL_POKEMON_API}${endpoints.allPokemons}`, {
    headers: { accept: "application/json" },
  })
  return await response.json()
}

export const getPokemonsByPage = async (pageNumber: number) => {
  const response = await fetch(`${BASE_URL_POKEMON_API}$${endpoints.pokemonPage(pageNumber)}`, {
    headers: { accept: "application/json" },
  })
  return await response.json()
}

export const getPokemonById = async (pokemonId: number) => {
  const response = await fetch(`${BASE_URL_POKEMON_API}${endpoints.pokemonById(pokemonId)}`, {
    headers: { accept: "application/json" },
  })
  return await response.json()
}
