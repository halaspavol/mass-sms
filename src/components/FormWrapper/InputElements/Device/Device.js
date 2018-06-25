import React from 'react'
import Aux from './../../../../hoc/Auxiliary/Auxiliary'

import './Device.sass'

const device = (props) => { 
   let devices,loading 
   let devs = props.devs

   if (devs !== null && devs !== "") {
      devices = devs.map(devId => {  
         return(
            <option key={devId}>{devId}</option>
         )
      })
   } else {
      loading = true
   }

   return (

      <Aux>
         <h3 id="text">Choose your device</h3>
         {loading ? (<h3>Loading...</h3>) : (<select className="Devices" name="devices" id="devices"> {devices} </select>)}
         
      </Aux>   
   )
}


export default device