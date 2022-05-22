import React from 'react';
import {Image} from 'antd';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Prace wykonane przez firmę SANIMAX</h1>
        <div className='cards_items'>
            <Image.PreviewGroup>
                <Image width={200} src='images/img-1.jpg' />
                <Image width={200} src='images/img-2.jpg' />
                <Image width={200} src='images/img-3.jpg' />
                <Image width={200} src='images/img-4.jpg' />
                <Image width={200} src='images/img-5.jpg' />
                <Image width={200} src='images/img-6.jpg' />
                <Image width={200} src='images/img-7.jpg' />
                <Image width={200} src='images/img-8.jpg' />
                <Image width={200} src='images/img-9.jpg' />
                <Image width={200} src='images/img-10.jpg' />
                <Image width={200} src='images/img-11.jpg' />
                <Image width={200} src='images/img-12.jpg' />
                <Image width={200} src='images/img-13.jpg' />
                <Image width={200} src='images/img-14.jpg' />
                <Image width={200} src='images/img-15.jpg' />
                <Image width={200} src='images/img-16.jpg' />
            </Image.PreviewGroup>
        </div>
    </div>
  )
}

export default Cards