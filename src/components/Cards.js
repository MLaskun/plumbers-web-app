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
                        text='testowy opis krotki'
                        label='test1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-2.jpg'
                        text='testowy opis krotki'
                        label='test2'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        text='testowy opis krotki'
                        label='test3'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-4.jpg'
                        text='testowy opis krotki'
                        label='test4'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-5.jpg'
                        text='testowy opis krotki'
                        label='test1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        text='testowy opis krotki'
                        label='test2'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-7.jpg'
                        text='testowy opis krotki'
                        label='test3'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        text='testowy opis krotki'
                        label='test4'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text='testowy opis krotki'
                        label='test1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-10.jpg'
                        text='testowy opis krotki'
                        label='test2'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-11.jpg'
                        text='testowy opis krotki'
                        label='test3'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-12.jpg'
                        text='testowy opis krotki'
                        label='test4'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-13.jpg'
                        text='testowy opis krotki'
                        label='test1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-14.jpg'
                        text='testowy opis krotki'
                        label='test2'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-15.jpg'
                        text='testowy opis krotki'
                        label='test3'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-16.jpg'
                        text='testowy opis krotki'
                        label='test4'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards