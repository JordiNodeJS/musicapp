import { useParams } from 'react-router-dom'
import { useTrackDetailsQuery } from '../redux/services/musicApi'

const TrackDetails = () => {
  const { trackDetailsId } = useParams()
  const { data } = useTrackDetailsQuery(trackDetailsId)

  return (
    <>
      <h1>SongDeatils: {trackDetailsId}</h1>
      <div>
        <img src={data?.images?.background} />
        <img src={data?.images?.coverart} />

      </div>
    </>
  )
}

export default TrackDetails
