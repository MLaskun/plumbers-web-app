import React from 'react'

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <img src={props.src} alt='Cokolwiek' className='cards__item__img'/>
        </li>
    </>
  );
}

export default CardItem