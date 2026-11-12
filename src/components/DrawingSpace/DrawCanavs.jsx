import { useState } from 'react'
function DrawCanvas() {
  const [scale, setScale] = useState(Math.min(window.innerWidth / 800*0.8, window.innerHeight / 800*0.8));
  return (
    <div className="drawarea">
      <canvas className="drawcanvas" width="800" height="800"
        style={{transform: `translate(-50%, -50%)scale(${scale})`}}
      ></canvas>
    </div>
  );
}

export default DrawCanvas;