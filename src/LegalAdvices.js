import React from 'react';
import {Link } from "react-router-dom";
import legalhelp from './pexels-pixabay-48148.jpg';
import './LegalAdvices.css';
function LegalAdvices() {
  return (
    <div className='LegalAdvices'>
        <h1>Get Legal Help</h1>
        <p>Ask your legal queries and get expert guidance. We are here to solve your legal problems.</p>
        <button><Link to="/Problems">Ask now</Link></button>
        <img src={legalhelp} alt="legalhelp"/>
    </div>
  )
}

export default LegalAdvices