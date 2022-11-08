/* eslint-disable no-console */
import { Counter } from './redux/features/counter/Counter'
import { useGetPokemonByNameQuery } from './redux/services/pokemonApi'

function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state

  console.log('data', data, 'error', error, 'isLoading', isLoading)

  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
