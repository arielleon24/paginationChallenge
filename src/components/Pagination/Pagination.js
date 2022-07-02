import React from 'react'
import './Pagination.scss';

export default function Pagination({resultsPerPage, totalListings, paginate }) {
  const pageNumbers = [];

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
        {pageNumbers.map((number, index) => index < 10 && ( 
        <button onClick={()=> {
          paginate(number)
          }}>
       {number}
        </button>
        ))}
      </ul>
    </nav>
  )
}
