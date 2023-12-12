import React from 'react'
import './Services.css';
import logo from './Logo.jpg';
import Obj from './obj.jpg';
import Benefit from './benefit.jpg';
function Services() {
  return (
    <div>
       <div className='Introduction'>
        <div className='Introtext'>
        <h3>Introduction</h3>
        <ul>
        <li> Law solver is a online community and knowledge-sharing platform for citizens and Law enthusiasts.</li>
        <li> It is holy platform for victims who are sufferer of injustice. Here, injustice includes unjust fine by unethical and corrupted policemen and other government authorities to illegal land encroachment where one individual or any organization occupy a piece of land without legal authorization or another person ownership right and built structure for personal purpose like farming and business etc. </li>
        </ul>
        </div>
        <img src={logo} alt='logo'/>
       </div>
       <div className='Objective'>
       <div className='Objtext'>
       <h3>Objective</h3>
        <ul>
            <li><b>Enlighten people :</b> Our platform will give people knowledge of Righteousness of law.</li>
            <li><b>Prevent Scammers :</b> people will now not tolerate any kind of wrong doing by scammers.</li>
            <li><b>Influence over law :</b> With our platform people will learn over new law or existing law.</li>
        </ul>
       </div>
       <img src={Obj} alt='Obj'/>
       </div>
       <div className='Benefits'>
        <div className='benetext'>
        <h3>Benefits for lawyers and citizens</h3>
        <ul>
            <li><b>For Lawyers :</b>Lawyers will get opportunity to explore and get internship . Also it will give them the experience for their future for how to deal with real world problems.</li>
            <li><b>For Citizens :</b>Citizens can find resources in our platform whether they are doing their work legally or illegally.</li>
            <li><b>For Both :</b>Law solver is an expert source of knowledge for laws, best cases to study , and tools used across the INDIA.</li>
        </ul>
        </div>
        <img src={Benefit} alt='Benefit'></img>
       </div>
       <div className='Impact'>
        <h3>Law Solver for creating impact </h3>
        <div className='TNT'>
            <h5>Tools and Techniques</h5>
            <p>This resource is the epitome of learning hands-on tools and techniques. Lawyers can learn from other Citizens' issues, answers, and learn from new perspectives.</p>
        </div>
        <div className='CS'>
            <h5>Community Support</h5>
            <p>Being a lawyer is a very challenging career, but with the help of a strong community, people can share their experiences and learn from others' mistakes.</p>
        </div>
        <div className='CPS'>
            <h5>Creative Problem-Solving</h5>
            <p>Law solver encourages citizens to seek justice. Having a community of lawyers that provide alternate viewpoints and solutions is a great way to approach problem-solving in a different light.</p>
        </div>
       </div>
    </div>
  )
}

export default Services
