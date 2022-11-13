import { Link } from 'react-router-dom'
import { useSongsByGenreQuery } from '../redux/services/musicApi'

const Browser = () => {
  const { data, isLoading, isFetching } = useSongsByGenreQuery('ALTERNATIVE')

  const Song = ({ song }) => (
    <li style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={`/song/${song.key}`}>{song.title}</Link>
      <small style={{ color: 'pink' }}>{song.subtitle}</small>
    </li>
  )

  return (
    <div>
      <div className="container">
        <div>isLoading: {isLoading.toString()}</div>
        <div>isLoading: {isFetching.toString()}</div>
      </div>

      <ul>
       { data?.map(song => <Song key={song.key} song={song} />) }
      </ul>
    </div>
  )
}

export default Browser
