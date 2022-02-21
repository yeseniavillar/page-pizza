import React from 'react'
import 'boxicons';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
       <div className='socialmedia'>
       <box-icon type='logo' name='facebook-square'color='#fff' size='lg'animation='tada'></box-icon>
       <box-icon type='logo' name='instagram-alt'color='#fff' size='lg'animation='tada'></box-icon>
       <box-icon type='logo' name='whatsapp'color='#fff' size='lg'animation='tada'></box-icon>
       </div>
       <p> &copy; 2022 yeseniavillar50@gmail.com</p>
       <div className="legal__links">
      <span>Made with <span class="heart">♥</span> Yesenia Villar</span>
    </div>
    </div>
  )
}
