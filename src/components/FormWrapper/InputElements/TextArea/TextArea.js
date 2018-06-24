import React from 'react'
import "./TextArea.sass";
 
const textArea = (props) => <textarea name="message" className="Message" id="message" placeholder="Add some text" onChange={props.addMessage}></textarea>

export default textArea