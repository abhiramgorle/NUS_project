import React from 'react'
import "./Templates.css"
import pic5 from "../Assests/5.png"
import pic6 from "../Assests/6.png"
import pic7 from "../Assests/7.png"
import pic8 from "../Assests/8.png"
import pic9 from "../Assests/9.png"
import pic10 from "../Assests/10.png"
import pic11 from "../Assests/11.png"
import pic12 from "../Assests/12.png"
import pic13 from "../Assests/13.png"
import pic14 from "../Assests/14.png"
import pic15 from "../Assests/15.png"
import pic16 from "../Assests/16.png"
const Tempmain = () => {
  return (
    <div className='templates'>
      <h2>
        Variety of Templates
      </h2>
      <div className='tempgrid'>
        <div className="gridele">
          <img src={pic5} alt="sampleimgs" />
          <h3>Type 1</h3>
        </div>
        <div className="gridele">
          <img src={pic6} alt="sampleimgs" />
          <h3>Type 2</h3>
        </div>
        <div className="gridele">
          <img src={pic7} alt="sampleimgs" />
          <h3>Type 3</h3>
        </div>
        <div className="gridele">
          <img src={pic8} alt="sampleimgs" />
          <h3>Type 4</h3>
        </div>
        <div className="gridele">
          <img src={pic9} alt="sampleimgs" />
          <h3>Type 5</h3>
        </div>
        <div className="gridele">
          <img src={pic10} alt="sampleimgs" />
          <h3>Type 6</h3>
        </div>
        <div className="gridele">
          <img src={pic11} alt="sampleimgs" />
          <h3>Type 7</h3>
        </div>
        <div className="gridele">
          <img src={pic12} alt="sampleimgs" />
          <h3>Type 8</h3>
        </div>
        <div className="gridele">
          <img src={pic13} alt="sampleimgs" />
          <h3>Type 9</h3>
        </div>
        <div className="gridele">
          <img src={pic14} alt="sampleimgs" />
          <h3>Type 10</h3>
        </div>
        <div className="gridele">
          <img src={pic15} alt="sampleimgs" />
          <h3>Type 11</h3>
        </div>
        <div className="gridele">
          <img src={pic16} alt="sampleimgs" />
          <h3>Type 12</h3>
        </div>
      </div>
    </div>
  )
}

export default Tempmain
