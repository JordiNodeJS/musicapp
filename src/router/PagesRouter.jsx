import { Route, Routes } from 'react-router-dom'
import Browser from '../pages/Browser'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'

const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Browser />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
    </Routes>
  )
}

export default PagesRouter
