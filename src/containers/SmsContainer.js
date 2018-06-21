import React, {Component} from 'react'
import axios from 'axios'

import Aux from './../hoc/Auxiliary/Auxiliary'

class SmsContainer extends Component {
   
   
   render() {
      
      // axios.get('v4/device/94327')
      //    .then(res => console.log(res))
      //    .catch(err => console.log(err))

      // Posts request to send a text message
      axios.post('v4/message/send',  [{
         'phone_number': '0908600565',
         'message': 'Test',
         'device_id': 123
      }])
         .then(response => console.log(response))
         .catch(error => console.log(error))


      return(
         <Aux>
            <div>
               Sem bude form
            </div>
         </Aux>
      )
   }
}

export default SmsContainer