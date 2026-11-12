import { useState, useRef, useEffect } from 'react'

import ToolPicker from '../components/DrawingSpace/ToolPicker'
import DrawCanvas from '../components/DrawingSpace/DrawCanavs'

import './DrawingSpace.css'

function DrawingSpace() {
  // const canvasRef = useRef(null);
  return (
    <>
      <ToolPicker f={tool => console.log('선택된 도구', tool)} />
      <DrawCanvas/>
    </>
  )
}

export default DrawingSpace