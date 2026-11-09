import './NewArtworkMenu.css'
import { useState } from 'react'

function NewArtworkMenu() {
  const [hide, setHide] = useState(false)
  return(
    <div className={`blide ${hide?'hide':'show'}`}>
      <div class="back" onClick={()=>setHide(true)}></div>
      <div className="new-artwork-menu">
        <h3>새 작품</h3>
        <main>
          <div className="items">
            <div className="mini-title">제목</div>
            <div className="contents"><input type="text" placeholder="작품 제목"/></div>
          </div>
          <div className="items">
            <div className="mini-title">프리셋</div>
            <div className="contents">
              <select>
                <option>최근 수정순</option>
                <option>이름순</option>
              </select>
            </div>
          </div>
          <div className="items">
            <div className="mini-title">크기</div>
            <div className="contents size-input">
              <input type="number" placeholder="가로" />
              <svg className="mul_icon" viewBox="0 0 32 32"><path stroke="#666" stroke-width="5" d="m5 5 22 22M5 27 27 5"></path></svg>
              <input type="number" placeholder="세로" />
            </div>
          </div>
        </main>
        <div className="contents">
          <button className="cancel" onClick={()=>setHide(true)}>취소</button>
          <button className="confirm">확인</button>
        </div>
      </div>
    </div>
  )
}

export default NewArtworkMenu