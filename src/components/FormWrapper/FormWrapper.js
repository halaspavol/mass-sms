import React from 'react'
import './FormWrapper.sass'
 
const formWrapper = (props) => (
   <div className="FormBackground">
      <input type="text" placeholder="Add number/s" name="number" onChange={props.addNumber}/>

      <p></p>
      
   </div>
)

export default formWrapper