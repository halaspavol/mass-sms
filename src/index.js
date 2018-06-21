import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsImlhdCI6MTUyOTU5NDEzMSwiZXhwIjo0MTAyNDQ0ODAwLCJ1aWQiOjU1NDEzLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.NIx2VK68STZU-kJ4q_YphKX2WuQmbnBCE0z3gxLJLhA'

axios.defaults.baseURL = 'https://smsgateway.me/api'
axios.defaults.headers.common['Authorization'] = API_KEY


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
