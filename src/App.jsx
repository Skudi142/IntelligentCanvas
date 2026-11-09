import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ToolPicker from './components/DrawingSpace/ToolPicker'

import ArtworkList from './page/ArtworkList'
// import DrawingSpace from './page/DrawingSpace'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArtworkList></ArtworkList>
      {/* <DrawingSpace></DrawingSpace> */}
      {/* <ToolPicker/> */}
    </>
  )
}