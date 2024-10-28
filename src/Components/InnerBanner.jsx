import React from 'react'
import { Link } from 'react-router-dom'

const InnerBanner = (props) => {
  return (
    <>

    
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url('/img/offer.jpg')"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{props.pagename}</h1>
                <nav aria-label="breadcrumb" className='navtextinner'>
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link to="/">Home <span>/</span> </Link></li> 
                        <li className="breadcrumb-item text-white active" aria-current="page">{props.pagename}</li>
                    </ol>
                </nav>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default InnerBanner
