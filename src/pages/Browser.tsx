import { Link } from 'react-router-dom'
import { useSongsByGenreQuery } from '../redux/services/musicApi'

type TSong = {
  key: string,
  title: string,
  subtitle: string
}
type SongProps = {
  key: string,
  song: TSong
}

type TSongsByGenre = {
  data: TSong[],
  isLoading: boolean,
  isFetching: boolean
}

const Browser = () => {
  const { data, isLoading, isFetching } = useSongsByGenreQuery<TSongsByGenre>('ALTERNATIVE')

  const Song = ({ song }: SongProps) => (
    <li style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={`/song/${song.key}`}>{song.title}</Link>
      <small style={{ color: 'pink' }}>{song.subtitle}</small>
    </li>
  )
  const songsView = data?.map((song: TSong) => <Song key={song.key} song={song} />)

  return (
    <div>
      <div className="container">
        <div>isLoading: {isLoading.toString()}</div>
        <div>isLoading: {isFetching.toString()}</div>
      </div>

      <ul>
        {songsView}
      </ul>
    </div>
  )
}

export default Browser
