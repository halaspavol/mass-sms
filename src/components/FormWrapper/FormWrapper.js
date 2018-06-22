import React from 'react'

import './FormWrapper.sass'
import Number from './Number/Number'
 
const formWrapper = (props) => (
   <div className="FormBackground">

      <Number addNumber={props.addNumber}/>

      

      <button onClick={props.send}>
         Send
      </button>

      
   </div>
)

export default formWrapper