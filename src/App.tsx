import { useState } from 'react'
import './App.css'
import CircleBar from './components/CircleBar'

function App() {
  const [percent, setPercent] = useState(0)
  //console.log(percent);
  return (
    <div className='app'>
      <CircleBar percent={percent} circleWidth='200'></CircleBar>
      <input className="progressInput" 
      type="range" min="1" max="100" step="1" value={percent} onChange={(ev) => setPercent(ev.target.value)}></input>

    </div>
  )
}

export default App
