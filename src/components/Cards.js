import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Prace wykonane przez firmę SANIMAX</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-1.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-2.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-4.jpg'
                        path='/gallery'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-5.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-7.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        path='/gallery'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-10.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-11.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-12.jpg'
                        path='/gallery'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-13.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-14.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-15.jpg'
                        path='/gallery'
                    />
                    <CardItem 
                        src='images/img-16.jpg'
                        path='/gallery'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards