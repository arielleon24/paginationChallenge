import React from 'react'
import './Header.scss';

export default function Header() {

  return (
    <div className='Header'>
      <div className='topNav'>
        <a><img src='/images/tracktick.png'></img></a>
        <a href='https://ariel-leon-portfolio.netlify.app/'><h2>About Me</h2></a>
      </div>
      <h1>Api Pagination Challenge</h1>  
    </div>
  )
}
