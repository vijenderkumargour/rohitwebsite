import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import AboutComponent from '../Components/AboutComponent'
import AchievementsComponent from '../Components/AchievementsComponent'
import DonationComponent from '../Components/DonationComponent'
import LatestNews1Component from '../Components/LatestNews1Component'
import BooklandComponent from '../Components/BooklandComponent'
import GalleryComponent from '../Components/GalleryComponent'
import ContactComponent from '../Components/ContactComponent'
import TestimonialComponent from '../Components/TestimonialComponent'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <AboutComponent /> 
      <AchievementsComponent />
       <DonationComponent />
       <LatestNews1Component /> 
       <BooklandComponent/>
       <GalleryComponent />
       <ContactComponent />
       <TestimonialComponent />
    </>
  )
}

export default Home
