import { useState } from 'react'
import ToolPicker from './components/ToolPicker'
import ArtworkList from './components/ArtworkList'
import ColorPicker from './components/ColorPicker'
import './App.css'

export default function App() {
  const [page, setPage] = useState('list')
  const [tool, setTool] = useState('pen')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [currentColor, setCurrentColor] = useState('#e32d20')

  const [recentColors, setRecentColors] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recentColors')) || []
    } catch {
      return []
    }
  })

  const saveRecentColor = (color) => {
    const next = [
      color,
      ...recentColors.filter(c => c !== color)
    ].slice(0, 7)

    setRecentColors(next)
    localStorage.setItem('recentColors', JSON.stringify(next))
  }

  const handleToolChange = (selectedTool) => {
    setTool(selectedTool)

    if (selectedTool === 'fill') {
      setShowColorPicker(true)
    }
  }

  return (
    <>
      {page === 'list' ? (
        <>
          <ArtworkList />

          <button onClick={() => setPage('drawing')}>
            그림 도구 화면으로 이동
          </button>
        </>
      ) : (
        <>
          <button onClick={() => {
            setPage('list')
            setShowColorPicker(false)
          }}>
            작품 목록으로 돌아가기
          </button>

          <ToolPicker f={handleToolChange} />

          
          {showColorPicker && (
            <>
              {/* 색상 선택기 뒤의 흐림 배경 */}
              <div
                className="color-picker-backdrop"
                onClick={() => {
                  saveRecentColor(currentColor)
                  setShowColorPicker(false)
                }}
              />

              {/* 색상 선택기 */}
              <ColorPicker
                initialColor={currentColor}
                recentColors={recentColors}
                onColorChange={setCurrentColor}
                onSaveColor={saveRecentColor}
                onClose={() => setShowColorPicker(false)}
              />
            </>
          )}
        </>
      )}
    </>
  )
}
