import { useState } from 'react'
import './ToolPicker.css'

import Range from '../Range'
import Color from './Color'

const ToolRadio=({ value, tool, f, children })=>(
  <>
    <input class="ToolRadioInput"
      type="radio"
      name="tool"
      id={value}
      value={value}
      checked={tool===value}
      onChange={e=>f(e.target)}
    />
    <label htmlFor={value}>{children}</label>
  </>
);

function ToolPicker({f}) {
  const [tool, setTool] = useState('pen');
  const onPick=e=>{
    setTool(e.value)
    f(e.value)
  }
  return(
    <div className="tool-picker-layout">
      <div className="tool-picker">
        <ToolRadio value="select" tool={tool} f={onPick}>
          <svg viewBox="0 0 32 32"><path stroke-dasharray="5 5" stroke-dashoffset="2.5" d="M6 6v20h20V6Z"></path></svg>
        </ToolRadio>
        <ToolRadio value="eraser" tool={tool} f={onPick}>
          <svg viewBox="0 0 32 32"><path d="m16 24 12-12-8-8-16 16 6 6h4l2-2-8-8"/></svg>
        </ToolRadio>
        <ToolRadio value="pen" tool={tool} f={onPick}>
          <svg viewBox="0 0 32 32"><path d="m23 6 3 3 2-2-3-3-2 2m-2 12 5-5-5-5L5 24l-1 4 4-1 16-16"/></svg>
        </ToolRadio>
        <Color/>
      </div>
      <Range vertical={true}/>
    </div>
  )
}

export default ToolPicker;