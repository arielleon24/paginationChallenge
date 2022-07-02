import React from 'react';
import './SiteList.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SiteList() {
  const [listings, setListings] = useState([]);
  const [results, setResults] = useState(4);

  React.useEffect(()=> {
    axios.get("https://tracktik-challenge.staffr.com/sites")
    .then(res => {
      console.log(res)
      setListings(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  console.log(listings)

  return (
    <div className="SiteList"> 
    <div className='buttonDiv'>
      <button onClick={()=> setResults(6)}>6 Results</button>
      <button onClick={()=> setResults(9)}>9 Results</button>
      <button onClick={()=> setResults(15)}>Max sites</button>
    </div>
      <b>Results: </b>{results}
      <ul className='SiteListings'>
        {
        listings.map((Listing, index) => index < results && <a href="https://google.com"><div className='ListItem' key={Listing.id}>
          <div className='imgHolder'>
          <img src="https://picsum.photos/200/300?random=1" alt="img"></img>
          </div>
          <div className='textHolder'>
          <h3>{Listing.title}</h3>
          <p id='addressTag'><b>Address:</b> {Listing.address.street},{Listing.address.city}, {Listing.address.country}</p>
          <p><b>Name:</b> {Listing.contacts.main.firstName} {Listing.contacts.main.lastName}, {Listing.contacts.main.jobTitle}</p>
          <p><b>Phone:</b> {Listing.contacts.main.phoneNumber}</p>
          <h5 className='email'><a href="mailto:someone@example.com">{Listing.contacts.main.email}</a></h5>
          </div>
        </div></a>
        )}
      </ul>
      <h5>Pages:</h5>
      <div className='pagination'>
          {listings.map((Listing, index) => <button>here</button>)}
      </div>
    </div>
  )
}
