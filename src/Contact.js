import React from 'react'
import './Contact.css';
function Contact() {
    return (
        <div className='Contact'>
            <form id='form1'>
                <h2>Contact Us</h2>
                <input type='text' placeholder='Name' id='Name' />
                <input type='email' placeholder='Email' id='Email' />
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Feedback'></textarea>
                </div>
                <button> Submit</button>
            </form>
        </div>
    )
}

export default Contact