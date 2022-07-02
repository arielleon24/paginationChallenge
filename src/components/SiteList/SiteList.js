import React from 'react';
import './SiteList.scss';
import Pagination from "../Pagination/Pagination";
// import { useEffect, useState } from 'react';
// import axios from 'axios';

export default function SiteList({listings, loading, resultsPerPage, setResultsPerPage, total, setCurrentPage}) {  
  // const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [resultsPerPage, setResultsPerPage] = useState(4);

  // React.useEffect(()=> {
  //   setLoading(true)
  //   axios.get("https://tracktik-challenge.staffr.com/sites")
  //   .then(res => {
  //     console.log(res)
  //     setListings(res.data)
  //     setLoading(false)
  //   })
  //   .catch(err => console.log(err))
  // }, [])
  // console.log(listings.length)

  if(loading) {
    return <h2>Loading...</h2>
  }
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const sendMail = (email) => `mailto:${email}`

  return (
    <div className="SiteList"> 
    <div className='dropDownDiv'>
      <button onClick={()=> setResultsPerPage(6)}>6 Results</button>
      <button onClick={()=> setResultsPerPage(9)}>9 Results</button>
      <button onClick={()=> setResultsPerPage(15)}>Max sites</button>
    </div>
      <b>Results: </b>{resultsPerPage}
      <ul className='SiteListings'>
        {
        listings.map((Listing, index) => index < resultsPerPage && <a href="https://google.com"><div className='ListItem' key={Listing.id}>
          <div className='imgHolder'>
          <img src="https://picsum.photos/200/300?random=1" alt="img"></img>
          </div>
          <div className='textHolder'>
          <h3>{Listing.title}</h3>
          <p id='addressTag'><b>Address:</b> {Listing.address.street},{Listing.address.city}, {Listing.address.country}</p>
          <p><b>Name:</b> {Listing.contacts.main.firstName} {Listing.contacts.main.lastName}, {Listing.contacts.main.jobTitle}</p>
          <p><b>Phone:</b> {Listing.contacts.main.phoneNumber}</p>
          <h5 className='email'><a href={sendMail(Listing.contacts.main.email)}>{Listing.contacts.main.email}</a></h5>
          </div>
        </div></a>
        )}
      </ul>
      <Pagination 
      resultsPerPage={resultsPerPage} 
      totalListings={total}
      paginate={paginate}
      />
    </div>
  )
}
