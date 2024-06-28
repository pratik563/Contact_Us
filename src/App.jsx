import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Contactform from './Components/ContactForm/Contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bigcontainer'>
    <Navbar/>
    <div className='main'>
    <ContactHeader/>
    <Contactform/>
    </div>
    </div>
  )
}

export default App
