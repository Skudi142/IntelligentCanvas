import { useState } from 'react'
function DrawCanvas() {
  const [scale, setScale] = useState(window.innerWidth / 800*0.8);
  return (
    <div className="drawarea">
      <canvas className="drawcanvas" width="800" height="800"
        style={{ transform: `scale(${scale})`, transformOrigin: '-50% -50%' }}
      ></canvas>
    </div>
  );
}

export default DrawCanvas;