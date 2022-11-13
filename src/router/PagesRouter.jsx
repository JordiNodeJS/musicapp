import { Route, Routes } from 'react-router-dom'
import Browser from '../pages/Browser'
import Page3 from '../pages/Page3'
import TrackDetails from '../pages/TrackDetails'

const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Browser />} />
        <Route path='/song/:trackDetailsId' element={<TrackDetails />} />
        <Route path='/page3' element={<Page3 />} />
    </Routes>
  )
}

export default PagesRouter
