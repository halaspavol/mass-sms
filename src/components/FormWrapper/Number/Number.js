import React from 'react'

import Aux from './../../../hoc/Auxiliary/Auxiliary'

const number = (props) => (
   <Aux>
      <input type="text" placeholder="Add number/s" name="number" onChange={props.addNumber}/>
   </Aux>
)

export default number