import React from 'react'

import './FormWrapper.sass'
import Number from './InputElements/Number/Number'
import TextArea from './InputElements/TextArea/TextArea';
 
const formWrapper = (props) => (
   <div className="FormBackground">

      <Number addNumber={props.addNumber}/>
      <TextArea addMessage={props.addMessage}/>



      <button onClick={props.send}>
         Send
      </button>

      
   </div>
)

export default formWrapper