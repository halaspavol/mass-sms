import React, {Component} from 'react'
import axios from 'axios'

import Aux from './../hoc/Auxiliary/Auxiliary'
import FormWrapper from './../components/FormWrapper/FormWrapper'

class SmsContainer extends Component {
   
   state = {
      sms: {     
         phone_number: [],
         message: "",
         device_id: null
      }
   }

   phoneNumberChangeHandler = (e) => {
      //saves the value of number input element
      this.setState({sms:{
         phone_number: e.target.value
      }})
      //prevents default refreshing of the page

   }

   sendMessageHandler = () => {
      // Posts request to send a text message

      // axios.post('v4/message/send',  [{
      //    'phone_number': '0908600565',
      //    'message': 'Test',
      //    'device_id': 123
      // }])
      //    .then(response => console.log(response))
      //    .catch(error => console.log(error))

      let num = this.state.sms.phone_number
      let arr = num.split(',')

      let objArr = arr.map(num => {
        return {
           phone_number: num,
           message: 'djavscg',
           device: 123
        } 
      })

      console.log(objArr)

   }
   
   render() {
      return(
         <Aux>
            <FormWrapper 
               addNumber={this.phoneNumberChangeHandler}
               send={this.sendMessageHandler}>

                  {this.state.sms.phone_number} 
            
            </FormWrapper>
         </Aux>
      )
   }
}

export default SmsContainer