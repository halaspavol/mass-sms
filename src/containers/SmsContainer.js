import React, {Component} from 'react'
import axios from 'axios'

import Aux from './../hoc/Auxiliary/Auxiliary'
import FormWrapper from './../components/FormWrapper/FormWrapper'

class SmsContainer extends Component {
   
   state = {
      sms: {     
         phone_number: null,
         message: null,
         device_id: null
      }
   }

   phoneNumberChangeHandler = (e) => {
      this.setState({sms:{
         phone_number: e.target.value
      }})
      console.log(this.state.sms.phone_number)
      e.preventDefault()
   }

   sendMessageHandler = () => {
      // Posts request to send a text message
      axios.post('v4/message/send',  [{
         'phone_number': '0908600565',
         'message': 'Test',
         'device_id': 123
      }])
         .then(response => console.log(response))
         .catch(error => console.log(error))
   }
   
   render() {



      return(
         <Aux>
            <FormWrapper 
               addNumber={this.phoneNumberChangeHandler}
               send={this.sendMessageHandler}
            />
         </Aux>
      )
   }
}

export default SmsContainer