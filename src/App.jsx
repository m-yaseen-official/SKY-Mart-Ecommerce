import React, { useContext } from 'react'
import { Auth } from './context/AuthContext'


const App = () => {
const data =  useContext(Auth)
console.log(data);
  return (
    <div>

    <div className='font-dm font-bold'>App
    <div className='font-syne font-bold'>App</div>
    </div>
    </div>
  )
}

export default App