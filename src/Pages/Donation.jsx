import React from 'react'
import InnerBanner from '../Components/InnerBanner'
import DonationComponent from '../Components/DonationComponent'
import BooklandComponent from '../Components/BooklandComponent'

const Donation = () => {
  return (
    <>
    <InnerBanner pagename="Donation" />
    <DonationComponent />
    <BooklandComponent />
    </>
  )
}

export default Donation