import React from 'react'

import './FormWrapper.sass'
import Number from './InputElements/Number/Number'
import TextArea from './InputElements/TextArea/TextArea'
import Button from './InputElements/Button/Button'
 
const formWrapper = (props) => (
   <div className="FormBackground">

      <h2>Mass sms sender</h2>
      <Number addNumber={props.addNumber}/>
      <TextArea addMessage={props.addMessage}/>
      <Button send={props.send}/>

      
   </div>
)

export default formWrapper