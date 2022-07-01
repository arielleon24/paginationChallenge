import React from 'react';
import './SiteList.scss';
import { useEffect, useState } from 'react';

export default function SiteList() {
  const [listing, setListing] = useState([]);

  React.useEffect(()=> {
    fetch("https://tracktik-challenge.staffr.com/sites")
    .then(results => setListing(results))

    console.log(listing)
  })

  return (
    <div className='SiteList'>
      hello
    </div>
  )
}
