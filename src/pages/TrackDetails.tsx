import { useParams } from 'react-router-dom'
import { useTrackDetailsQuery } from '../redux/services/musicApi'

type TError = {
  status: number,
  data: string
}


type TData = {
  // [key: string]:  { [key: string]: string },
  images: { [key: string]: string },
  genres: { [key: string]: string },
  hub: { actions: { uri?: string }[] }
}

type TUseQuery = {
  data: TData,
  isLoading: boolean,
  isFetching: boolean,
  error: TError
}

const TrackDetails = () => {
  const { trackDetailsId } = useParams()
  const { data, isLoading, isFetching, error } = useTrackDetailsQuery<TUseQuery>(trackDetailsId)

  if (isLoading || isFetching) return <h1>LOADING....................</h1>

  const { images: { background, coverart }, genres: { primary }, hub: { actions } }: TData = data ?? { images: { background: '', coverart: '' }, genres: { primary: '' }, hub: { actions: '' } }
  console.log('action', actions[1]?.uri)
  console.log('error', error?.status)
  return (
    <>
      <h1>SongDeatils: {trackDetailsId}</h1>
      <h3>{primary}</h3>
      <audio
        src={actions[1]?.uri}
        autoPlay
      />
      <div>
        <img src={background} />
        <img src={coverart} />

      </div>
    </>
  )

}


export default TrackDetails
