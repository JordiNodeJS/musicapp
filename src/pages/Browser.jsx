import { useSongsByGenreQuery } from '../redux/services/musicApi'

const Browser = () => {
  const query = useSongsByGenreQuery('ALTERNATIVE')

  return (
    <div>
      <div className="container">
        <div>isLoading: {query.isLoading.toString()}</div>
        <div>isLoading: {query.isFetching.toString()}</div>
      </div>

      <ul>
       { query.data?.map(song => (<li style={{ display: 'flex', flexDirection: 'column' }} key={song.key}>{song.title} <small style={{ color: 'pink' }}>{song.subtitle}</small></li>))}
      </ul>
    </div>
  )
}

export default Browser
