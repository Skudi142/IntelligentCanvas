import { useState } from 'react'
import './Color.css'

import { Blind } from '../mainComponents'

function Color({ color, onChange }) {
  const [hide, setHide] = useState(true)

  return(<>
    <div className="openColorPicker" onClick={() => {setHide(false)}}></div>
    <Blind hide={hide} onClick={() => {setHide(true)}}>
      <div></div>
    </Blind>
  </>)
}

export default Color