import React from 'react'
 
const textArea = (props) => <textarea name="message" id="message" placeholder="Add some text" onChange={props.addMessage}></textarea>

export default textArea