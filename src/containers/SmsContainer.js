import React, {Component} from 'react'
import axios from 'axios'

import Aux from './../hoc/Auxiliary/Auxiliary'
import FormWrapper from './../components/FormWrapper/FormWrapper'

class SmsContainer extends Component {
   
   state = {     
      phone_number: "",
      message: "",
      device_id: null
   }

   phoneNumberChangeHandler = (e) => {
      //saves the number value of an input element
      this.setState({
         phone_number: e.target.value
      })
   }

   messageTextHandler = (e) => {
      this.setState({
            message: e.target.value
      })

      console.log(this.state.message)
   }

   // Posts request to send a text message
   sendMessageHandler = () => {

      // gets phone number from state
      let a = this.state.phone_number
      // splits string to an array of phone numbers 
      let arr = a.split(',')
      // posts request with the data from the state

      
      axios.post('v4/message/send', arr.map(num => {
         return {
            'phone_number': num,
            'message': 'Test',
            'device_id': 94327
         }
      }))
         .then(response => console.log(response))
         .catch(error => console.log(error))

   }
   
   render() {
      return(
         <Aux>
            <FormWrapper 
               addNumber={this.phoneNumberChangeHandler}
               addMessage={this.messageTextHandler}
               send={this.sendMessageHandler} />
         </Aux>
      )
   }
}

export default SmsContainer