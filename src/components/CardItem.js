import React from 'react'


function CardItem(props) {
  return (
    <>
      <button className='cards__item'>
          <img src={props.src} alt='Cokolwiek' className='cards__item__img'/>
      </button>
    </>
  );
}

export default CardItem