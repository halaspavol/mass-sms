import React from 'react'

import './FormWrapper.sass'
import Number from './Number/Number'
 
const formWrapper = (props) => (
   <div className="FormBackground">

      <Number addNumber={props.addNumber}/>

      <p>{props.children}</p>
      
   </div>
)

export default formWrapper