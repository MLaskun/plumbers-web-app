import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Services() {
    return(
        <>
            <div className='services'>
                <h1>Czym się głównie zajmujemy</h1>
                <h2>gaz</h2>
                <ul>
                    <li>wykonanie instalacji gazowych</li>
                    <li>montaż kuchenek</li>
                    <li>próby szczelności</li>
                </ul>
                <h2>wod-kan</h2>
                <ul>
                    <li>instalacje wodno-kanalizacyjne</li>
                </ul>
                <h2>instalacje grzewcze</h2>
                <ul>
                    <li>kotłownie (montaż, dobór, instalacja)</li>
                    <li>grzejniki</li>
                    <li>ogrzewanie podłogowe</li>
                </ul>
                <h3>Dysponujemy wszystkimi potrzebnymi uprawnieniami oraz oferujemy fachowe doradctwo w pełnym zakresie wykonywanych przez nas usług.</h3>
            </div>
            {/* <p>bez wezla cieplnego i bez faktur, prysznice też wyjebać</p> */}
            <Footer />
        </>
    ) 
}