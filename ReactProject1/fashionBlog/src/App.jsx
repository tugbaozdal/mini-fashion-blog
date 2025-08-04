import { useState } from 'react'
import './App.css'
import Header from './Header'
import {styles} from './Data'
import Styles from './Styles'
import './css/Style.css'

function App() {
 
  return (
    <div>
      <Header/>
      <div className='style-main'>
      {
        styles?.map((styles)=>(
          <Styles key={styles.id} styles={styles}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
