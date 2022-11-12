import { Counter } from './redux/features/counter/Counter'
import { BrowserRouter } from 'react-router-dom'
import Layout from './router/Layout'
import PagesRouter from './router/PagesRouter'

function App() {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state
  // console.log('data', data, 'error', error, 'isLoading', isLoading)

  return (
    <div>
      <Counter />
      <BrowserRouter>
      <Layout>
        <PagesRouter />
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
