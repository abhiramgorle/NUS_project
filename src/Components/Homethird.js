import React,{useState} from 'react'
import "./Homethird.css"
import opt1 from "../Assests/option1.png"
import opt3 from "../Assests/option3.png"
import Modal from './Modal/Modal';
const Homethird = () => {
    const[click,setClick] = useState(false)
    const handleClick=() =>setClick(!click)
  return (
    <div className='homethird'>
        <div className='thirdhead'>
            <h2> Select one of the three available options</h2>
        </div>
        <div className='options' >
            <div className='option' >
                <img src={opt1} alt='optionimg'></img>
                <h3>PDF Chatbot</h3>
                
            </div>
            <div className={click? 'option-click':'option1'} onClick={handleClick}>
            
                <img src={opt1} alt='optionimg'></img>
                <h3 className='sepph3'>Summarized Notes</h3>
              
                <Modal class='greenbtn'/>
            </div>
            <div className='option' >
                <img src={opt3} alt='optionimg'></img>
                <h3 className='seph3'>PDF Quiz</h3> 
            </div>
        </div>
    </div>
  )
}

export default Homethird
