import React from 'react'

import './FormWrapper.sass'
import Number from './InputElements/Number/Number'
import TextArea from './InputElements/TextArea/TextArea'
import Button from './InputElements/Button/Button'
import Device from './InputElements/Device/Device'
 
const formWrapper = (props) => (
   <div className="FormBackground">

      <h2>Mass sms sender</h2>
      <Number addNumber={props.addNumber}/>
      <Device devs={props.devs}/>
      <TextArea addMessage={props.addMessage}/>
      <Button send={props.send}/>
      
   </div>
)

export default formWrapper