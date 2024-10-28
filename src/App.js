import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom' 
import Header from './Components/Header'
import Home from './Pages/Home'
import  Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import News from './Pages/News'
import Donation from './Pages/Donation' 
import Gallery from './Pages/Gallery'
import Achievements from './Pages/Achievements'
import Testimonial from './Pages/Testimonial' 
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
     <Header />

      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/achievement' element={<Achievements />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact/>} />
       
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>

    <Footer />
    </>
  )
}

export default App
