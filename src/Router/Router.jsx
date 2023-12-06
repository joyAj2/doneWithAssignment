import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Pages...............................
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound/NotFound'
import Login from '../Pages/Auth/Login'
import Signup from '../Pages/Auth/Signup'

// Import Components...............................
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import Dashboard from '../Pages/Dashboard/Dashboard'

export default function Router() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer />   
    </BrowserRouter>
  )
}
