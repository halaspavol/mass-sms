import React from 'react'
import Aux from './../../../../hoc/Auxiliary/Auxiliary'

import './Device.sass'

const device = (props) => { 
   
   let devices
   let devs = props.devs

   while(props.devs !== null) {
      
      devices = devs.map(devId => {
      
         return(
      
            <option key={devId}>{devId}</option>
      
         )
      })

      break
      
   }


   
   return (

      <Aux> 
         <select name="devices" id="device">
            {devices}
         </select>
      </Aux>   
   )
}


export default device