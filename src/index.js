import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Editor from './editor'

import './styles.css'

function App() {
  const [text, setText] = useState('')
  const [ro, setRo] = useState(false)

  const handleRo = event => {
    const checked = event.currentTarget.value
    setRo(checked)
  }

  return (
    <div className="App">

      <span>Read only</span>
      <input type="checkbox" value={ro} onChange={handleRo} />
      <Editor text={text} onChange={setText} readOnly={ro} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
