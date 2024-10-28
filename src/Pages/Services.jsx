import React from 'react'
import InnerBanner from '../Components/InnerBanner'
import DonationComponent from '../Components/DonationComponent'
import AchievementsComponent from '../Components/AchievementsComponent'

const Services = () => {
  return (
    <>
    <InnerBanner pagename="Our Services" /> 
    <DonationComponent />
    <AchievementsComponent />
    </>
  )
}

export default Services