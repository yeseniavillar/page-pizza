import React from 'react'
import { Link } from "react-router-dom";
import bannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'style={{backgroundImage:`url(${bannerImage})`}}>
     <div className='headerContainer' >
       <h1>Yesenia's Pizzeria</h1>
       <p>PASSION FOR PIZZA</p>
      <Link to='/menu'>
       <button>ORDER NOW</button>
       </Link>
     </div>
    </div>
  )
}

export default Home