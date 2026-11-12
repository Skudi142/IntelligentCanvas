import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'

import ToolPicker from './components/DrawingSpace/ToolPicker'

import ArtworkList from './page/ArtworkList'
import DrawingSpace from './page/DrawingSpace'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtworkList/>} />
        <Route path="/drawing" element={<DrawingSpace/>} />
      </Routes>
    </BrowserRouter>
  )
}