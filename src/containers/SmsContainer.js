import React, {Component} from 'react'
import axios from 'axios'

import './SmsContainer.sass'
import FormWrapper from './../components/FormWrapper/FormWrapper'

class SmsContainer extends Component {
	
      state = {     
		phone_number: "",
      message: "",
		device_id: null
	}
	
	componentDidMount() {
		axios.post("v4/device/search")
		.then(res => {
			const dev = res.data.results
			const devIds = dev.map(num => {
				return num.id
			})
			this.setState({device_id: devIds})
		})
		.catch(err => console.log(err))
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
   }

   // Posts request to send a text message
   sendMessageHandler = () => {

      // gets informations from state
      let phoneNumber = this.state.phone_number
		let mess = this.state.message
		let devId = document.getElementById("devices").value
		console.log(devId)
      // splits string to an array of phone numbers 
      let arr = phoneNumber.split(',')
		
		// posts request with the data from the state
		
		if ( (phoneNumber !== "") && (mess !== "") && (devId !== null) && (devId !== isNaN) ) /*prevention for blank messages*/ {
			axios.post('v4/message/send', arr.map(num => {
				return {
					'phone_number': num,
					'message': mess,
					'device_id': devId
				}
			}))
				.then( alert("Succesfully sent") )
				.catch( alert("There was some problem with sending... Try again!") )
		} else {
			alert("Cannot be send. Please, fill the form fully")
		}
			
	}

   render() {

		return(

         <div className="Container">
            <FormWrapper 
               addNumber={this.phoneNumberChangeHandler}
               addMessage={this.messageTextHandler}
               send={this.sendMessageHandler} 
					devs={this.state.device_id}/>
         </div>

      )
   }
}

export default SmsContainer