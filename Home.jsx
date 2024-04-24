import React from 'react'
import Cards from "../components/Cards.jsx";
import ImgCards from "../components/ImgCards.jsx";
import TheTeam from '../components/TheTeam.jsx';
import Canvas from '../components/Canvas.jsx';
import AchievementCard from '../components/AchievementCard.jsx';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LegacyCard from '../components/LegacyCard.jsx';
import "./Home.css";
import Slides from "../components/Slides.jsx";
function Home() {
    return (
        <div className='main-container'>
  <Slides />
  <div className='container text-center mb-5'>
    <h1 className='mb-3' style={{ fontWeight: "bold" }}>$Our Mission</h1>
    <h6 className='mb-3'>[#Racing Up The Ladder]</h6>
    <Cards />
  </div>
  <div className='container text-center mb-2'>
    <h1 className='mb-5' style={{ fontWeight: "bold" }}>**The Team**</h1>
    <TheTeam />
  </div>
  <div className='container text-center mb-5'>
    <h1 className='mb-3' style={{ fontWeight: "bold" }}>+Driving Organizational and Technical Excellence+</h1>
    <p>[WHERE INNOVATION MEETS EXCELLENCE]</p>
    <h5>Our team has both organizational and technical division which are further divided into mechanical, electrical, and driverless subdivisions</h5>
    <ImgCards />
  </div>
  <div className='container mb-4'style={{marginTop:"3"}}>
    <h1 style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>E12_First</h1>
    <p  style={{display:"flex",justifyContent:"center"}}>[View 3D model of E12 First by IIT Bombay Racing]</p>
    <Canvas/>
  </div>
  <div className='container text-center mb-5'>
    <h1 style={{ fontWeight: "bold" }}>@Our Achievements</h1>
    <p className='mb-3'>[INNOVATIVE, COMPETITIVE, EDUCATIONAL]</p>
    <AchievementCard />
  </div>
  <div className='container text-center mb-4'>
    <p className='mb-2'>[OUR CARS]</p>
    <h1 style={{ fontWeight: "bold" }}>!Our Legacy</h1>
    <h5 className='mb-3'>[Click To Know The Legacy Of Our Cars]</h5>
    <LegacyCard />
    <Link to="/Cars"><button className="btn btn-primary">See More Cars -:</button></Link>
  </div>
</div>
    )
}

export default Home
