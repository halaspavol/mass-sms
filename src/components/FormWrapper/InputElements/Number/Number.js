import React from 'react'
import './Number.sass'

const number = (props) => <input type="text" className="PhoneNumber" placeholder="Add phone number/s" name="number" onChange={props.addMessage}/>

export default number