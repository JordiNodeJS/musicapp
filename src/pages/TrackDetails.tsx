import { useParams } from 'react-router-dom'
import { useTrackDetailsQuery } from '../redux/services/musicApi'

const TrackDetails = () => {
  const { trackDetailsId } = useParams()
  const { data, isLoading } = useTrackDetailsQuery(trackDetailsId)

  if (isLoading) return <h1>LOADING....................</h1>

  const { images: { background, coverart }, genres: { primary } } = data

  return (
    <>
      <h1>SongDeatils: {trackDetailsId}</h1>
      <h3>{primary}</h3>
      <div>
        <img src={background} />
        <img src={coverart} />

      </div>
    </>
  )

}


export default TrackDetails
