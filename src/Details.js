import React from 'react'
import kyr from './Know your rights.jpg';
import Advice from './Advice.jpg';
import './Details.css';
import Contact from './Contact';
import LegalAdvices from './LegalAdvices';
function Details() {
    return (
        <>
        <LegalAdvices/>
        <div className='Details'>
            <div className='Left'>
            <img src={Advice} alt="Advice"/>
                <h2>Get Legal Solutions</h2>
                <p>Find answers to your legal questions and get expert advice from qualified lawyers.</p>
            </div>
            <div className='Right'>
            <img src={kyr} alt="Know your rights"/>
                <h2>Know your Rights</h2>
                <p>Empower yourself with knowledge about your legal rights and responsibilities with our informative blog posts.</p>
            </div>
        </div>
        
        <Contact/>
        </>
    )
}

export default Details