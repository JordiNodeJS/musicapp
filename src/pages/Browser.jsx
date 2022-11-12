import { useSongsByGenreQuery } from '../redux/services/musicApi'

const Browser = () => {
  const query = useSongsByGenreQuery('ALTERNATIVE')
  console.log(query.currentData)
  console.log(query.currentData === query.data)
  return (
    <div>
      <ul>
       { query.data?.map(song => (<li key={song.key}>{song.title}</li>))}
      </ul>
    </div>
  )
}

export default Browser
