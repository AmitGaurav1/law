import React from 'react'
import amit from './Amit.jpg';
import sumit from './Sumit.jpg';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='up'>
          <div className='ProjectDetails'>
            <p><span>Project Name :</span> Law Solver</p>
            <p><span>Submited To :</span> Uttaranchal University</p>
            <p><span>College Name :</span> Uttaranchal Institute of Technology</p>
            <p><span>Location :</span> Prem Nagar, Dehradun , Uttarakhand - 248007</p>
            <p><span>Guided By :</span> Anuj Kumar & Rusha Shahmon</p> 
          </div>
          </div>
        <footer>
        <div className="Sumit" >
        <img src={sumit} alt="Amit"/>
          <p><b>Name :</b>Sumit Gaurav</p><br/>
          <p><b>Role :</b>Captain & Backend Developer</p><br/>
          <p><a href="mailto:sumitamit5588@gmail.com" className="fa fa-envelope"></a> <a href="" className="fa fa-instagram"></a> <a href="" className="fa fa-facebook"></a> <a href="" className="fa fa-linkedin"></a></p><br/>
          <p><b>Contact no :</b><a href="tel:+919718430089">+919718430089</a></p><br/>
        </div>
        <div className="Amit" >
        <img src={amit} alt="Amit"/>
          <p><b>Name :</b>Amit Gaurav</p><br/>
          <p><b>Role :</b>frontend & Backend Developer</p><br/>
          <p><a href="mailto:sumitamit5588@gmail.com" className="fa fa-envelope"></a> <a href="" className="fa fa-instagram"></a> <a href="" className="fa fa-facebook"></a> <a href="" className="fa fa-linkedin"></a></p><br/>
          <p><b>Contact no :</b><a href="tel:+918368077792">+918368077792</a></p><br/>
        </div>
        <div className="Akshay" >
          <p><b>Name :</b>Akshay kumar Arya</p><br/>
          <p><b>Role :</b>UI & UX designer</p><br/>
          <p><a href="mailto:sumitamit5588@gmail.com" className="fa fa-envelope"></a> <a href="" className="fa fa-instagram"></a> <a href="" className="fa fa-facebook"></a> <a href="" className="fa fa-linkedin"></a></p><br/>
          <p><b>Contact no :</b><a href="tel:+919718430089">+919718430089</a></p><br/>
        </div>
        <div className="Darvesh" >
          <p><b>Name :</b>Darvesh Chauhan</p><br/>
          <p><b>Role :</b>frontend & Backend Developer</p><br/>
          <p><a href="mailto:sumitamit5588@gmail.com" className="fa fa-envelope"></a> <a href="" className="fa fa-instagram"></a> <a href="" className="fa fa-facebook"></a> <a href="" className="fa fa-linkedin"></a></p><br/>
          <p><b>Contact no :</b><a href="tel:+919718430089">+919718430089</a></p><br/>
        </div>
      </footer>
    </div>
  )
}
