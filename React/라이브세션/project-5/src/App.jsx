import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('asd')
  const handleButtonClick = () => {
    console.log('button clicked')
  }

  useEffect(() => {
    console.log('useEffect 실행되었스비다.')
  }, [handleButtonClick])
  return (
    <div>
      <input type='text' value={inputValue}
        onChange={e => setInputValue(e)} />
      <button onClick={handleButtonClick}>버튼 클릭</button>
    </div>
  )
}

export default App
