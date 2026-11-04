import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ToolPicker from './components/ToolPicker'
import ArtworkList from './components/ArtworkList'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ArtworkList></ArtworkList> */}
      <ToolPicker/>
    </>
  )
}