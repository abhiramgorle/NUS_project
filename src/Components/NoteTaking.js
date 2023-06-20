import React from 'react'
import "./Templates.css"
import pic1 from "../Assests/1.png"
import pic2 from "../Assests/2.png"
import pic3 from "../Assests/3.png"
import pic4 from "../Assests/4.png"
const NoteTaking = () => {
  return (
    <div className='templates'>
      <h2>
        Variety of Note Taking Methods
      </h2>
      <div className='tempgrid1'>
        <div className="gridele">
          <img src={pic1} alt="sampleimgs" />
          <h3>Type 1</h3>
        </div>
        <div className="gridele">
          <img src={pic2} alt="sampleimgs" />
          <h3>Type 2</h3>
        </div>
        <div className="gridele">
          <img src={pic3} alt="sampleimgs" />
          <h3>Type 3</h3>
        </div>
        <div className="gridele">
          <img src={pic4} alt="sampleimgs" />
          <h3>Type 4</h3>
        </div>
        
      </div>
    </div>
  )
}

export default NoteTaking
