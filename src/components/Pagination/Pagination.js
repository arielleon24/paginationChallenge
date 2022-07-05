import React, { useState } from 'react'
import './Pagination.scss';


export default function Pagination({resultsPerPage, totalListings, paginate }) {
  const pageNumbers = [];
const [page, setPage ] = useState(1);

  for(let i = 1; i <= Math.ceil(totalListings / resultsPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers)
  }

  if(pageNumbers.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    <nav>
      <ul className='Pagination'>
        <button onClick={()=> { 
          if(page === 1) {

          } else {
            setPage(page -1)
            paginate(page)
          }
          }}>
            <h5>Previous page</h5>
        </button>
        <h3>
        {page}/{Math.ceil(totalListings / resultsPerPage)}
        </h3>
        <button onClick={()=> {
       if(page === Math.ceil(totalListings / resultsPerPage)) {
        setPage(1)
        paginate(page)
      } else {
        setPage(page +1)
        paginate(page)
      }
          }}>
            <h5>Next page</h5>
        </button>
      </ul>
    </nav>
  )
}
