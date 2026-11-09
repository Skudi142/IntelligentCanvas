import { useState } from 'react'
import './ToolPicker.css'

import Range from '../Range'

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
  return(<>
    <div className="tool-picker">
      <ToolRadio value="fill" tool={tool} f={onPick}>
        <svg viewBox="0 0 32 32"><path d="m24 10-11 2M4 24v-7L16 5l12 12-10 10L8 17H4"/></svg>
      </ToolRadio>
      <ToolRadio value="eraser" tool={tool} f={onPick}>
        <svg viewBox="0 0 32 32"><path d="m16 24 12-12-8-8-16 16 6 6h4l2-2-8-8"/></svg>
      </ToolRadio>
      <ToolRadio value="pen" tool={tool} f={onPick}>
        <svg viewBox="0 0 32 32"><path d="m23 6 3 3 2-2-3-3-2 2m-2 12 5-5-5-5L5 24l-1 4 4-1 16-16"/></svg>
      </ToolRadio>
      
    </div>
    <Range vertical={true}/>
  </>)
}

export default ToolPicker;