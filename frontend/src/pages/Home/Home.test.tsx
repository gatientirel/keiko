import { render, screen } from "@testing-library/react"
import { Home } from "./index"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

const server = setupServer(
  http.get("http://localhost:8000/pokemons", () => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return HttpResponse.json([
      { id: 1, name: "bulbasaur", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 },
    ])
  }),
)

describe("<Home />", () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

  it("should display Bulbasaur and Ivysaur", async () => {
    render(<Home />)
    const bulbasaur = await screen.findByText(/bulbasaur/i)
    const ivysaur = await screen.findByText(/ivysaur/i)
    expect(bulbasaur).toBeInTheDocument()
    expect(ivysaur).toBeInTheDocument()
  })
})
