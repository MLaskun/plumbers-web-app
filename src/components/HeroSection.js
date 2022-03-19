import React from 'react'
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>O nas</h1>
        <p>Jesteśmy serwisem hydraulicznym który upora się z powodzeniem z każdą hydrauliczną usterką. Świadczymy swoje usługi na terenie Rzeszowa i okolic. Nasza firma posiada wieloletnie doświadczenie dzięki czemu  sprawdzi się nie tylko w przypadku drobnych awarii ale również przy planowanych remontach czy modernizacji sieci wodnej oraz kanalizacyjnej. Zgłoś się po pomoc do nas  i zapomnij o kłopotliwych usterkach.</p>
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