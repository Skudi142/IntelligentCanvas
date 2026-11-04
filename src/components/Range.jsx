import { useRef, useState } from 'react';

function Range({value: initialValue=0, over=false, onInput, onChange, vertical=false}){
  const rangeRef = useRef(null);
  const barRef = useRef(null);

  const [value, setValue] = useState(() => {
    let v = Number(initialValue);
    if(v<0)return 0;
    if(!over&&v>1)return 1;
    return v;
  });

  const drag = useRef({
    active: false,
    v: value,
    FineStart: true,
    valuebuf: 0,
    posbuf: null
  });

  // 실제 값 변경
  const setvalue = v => {
    if(v < 0)v = 0;

    if(!over && v > 1)v = 1;

    drag.current.v = v;
    setValue(v);

    onInput?.(v);
  };

  const getValue = (e, rect) => {
    if(vertical)return(rect.bottom-e.clientY)/rect.height;
    return (e.clientX-rect.left)/rect.width;
  };

  const getFineDelta = (e, rect) => {
    if(vertical)
      return(drag.current.posbuf.y-e.clientY)/rect.height/2;
    return(e.clientX-drag.current.posbuf.x)/rect.width/2;
  };

  const getBarSize = () => {
    if(!barRef.current)return 0;
    const rect = barRef.current.getBoundingClientRect();
    return vertical?rect.height:rect.width;
  };

  // 드래그 시작
  const pointerDown = e => {
    const range = rangeRef.current;
    const rect = range.getBoundingClientRect();

    let v = getValue(e, rect);

    drag.current.active = true;
    drag.current.v = v;

    setvalue(v);

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  // 드래그
  const pointerMove = e => {
    if(!drag.current.active)return;

    const range = rangeRef.current;
    const bar = barRef.current;
    const rect = range.getBoundingClientRect();

    let v = getValue(e, rect);

    const fine =
      vertical
        ? rect.left-e.clientX>60
        : e.clientY-rect.bottom>60;

    if(fine){
      if(drag.current.FineStart){
        drag.current.valuebuf = drag.current.v;
        drag.current.posbuf = {
          x: e.clientX,
          y: e.clientY
        };
      }

      v = drag.current.valuebuf + getFineDelta(e, rect);

      drag.current.FineStart = false;
    }else{
      drag.current.FineStart = true;
    }

    let I = v;

    if(I < 0)I = 0;
    else if(I > 1)I = 1;

    const size = vertical ? rect.height : rect.width;

    if(
      Math.abs(
        size * I -
        getBarSize()
      ) <= 10
    ){
      bar.style.transition = 'none';
    }else{
      bar.style.transition = '.05s linear';
    }

    setvalue(v);
  };

  // 드래그 종료
  const pointerUp = e => {
    if(!drag.current.active)return;

    drag.current.active = false;
    drag.current.FineStart = true;

    if(barRef.current)
      barRef.current.style.transition = '';

    e.currentTarget.releasePointerCapture?.(e.pointerId);

    onChange?.(drag.current.v);
  };


  let barValue = value;

  if(barValue < 0)barValue = 0;
  if(barValue > 1)barValue = 1;

  return(
    <div
      ref={rangeRef}
      tabIndex={0}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      className={`range${vertical ? ' vertical' : ''}`}
    >
      <div className="range-bg">
        <div
          ref={barRef}
          className="range-bar"
          style={{
            ...(vertical?
              {height:`${barValue*100}%`,width:'100%'}
              :{width:`${barValue*100}%`})
          }}
        />
      </div>
    </div>
  );
}

export default Range;