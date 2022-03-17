import React from 'react'
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>O nas</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, lacinia ut turpis in, varius pellentesque libero. Aliquam libero turpis, hendrerit id purus sit amet, sagittis sodales tortor. Sed scelerisque lobortis enim, a tempor dui maximus commodo. Praesent varius ex et orci efficitur, ut viverra ligula accumsan. Suspendisse pharetra nisi sed erat imperdiet, quis volutpat neque facilisis. Mauris ultrices in leo et hendrerit. Sed blandit consequat elit id dignissim.</p>
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/gallery'
        >
          Zobacz zdjęcia! <i class="fa-solid fa-photo-film"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/contact'
        >
          Skontaktuj się z nami <i class="fa-solid fa-phone"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection