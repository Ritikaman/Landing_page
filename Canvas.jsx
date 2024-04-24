import React from 'react';
import "./Canvas.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Canvas = () => {
 
  return (
<div className='flip-card-container'>
<div className="flip-card" style={{display:"flex",justifyContent:"center",height:"26rem"}}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src="https://media.sketchfab.com/models/b4c96cbfecf648b3a2fbf822df4ba37f/thumbnails/d0ffcaa08eda4e93a74bfe2c15d93e8b/ad8c0663978842048251633946b6592c.jpeg"
     alt="Avatar" style={{width:"60rem",height:"60rem"}}/>
    </div>
    <div className="flip-card-back">
      <h1 style={{fontWeight:"bold",marginTop:"5rem"}}>E12_First</h1>
      <p>@3D model</p>
      <p style={{marginBottom:"2rem"}}>#Racing Up The Ladder</p>
      <Link to="https://sketchfab.com/3d-models/e12-first-b4c96cbfecf648b3a2fbf822df4ba37f"><Button variant='primary'>Check Out</Button></Link>
    </div>
  </div>
</div>
</div>
  );
};

export default Canvas;