import React from 'react'
import "./Homemain.css"
import img1 from "../Assests/book.png"
import logo from "../Assests/logoo.png"
const Homemain = () => {
  return (
    <div className='homemain'>
        <div className='head'>
            <div className='headcontent'>
                <h2>
                    Effortlessly transform reference books into beautiful notes
                </h2>
                <p>
                    1. Upload your book chapter PDF.
                </p>
                <p>
                    2. Pick one of the 3 options available (Chatbot, Summarized Notes, Quiz).
                </p>
                <p>
                    3. Let the learning begin.
                </p>
                
            </div>
            <div className='headimg'>
                <img src={img1} alt='imagebooks'></img>
            </div>
            <div className='logo'>
                <img src={logo} alt='logo'></img>

            </div>

        </div>
        <div className='headside'>

        </div>
    </div>
  )
}

export default Homemain
