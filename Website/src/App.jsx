import React, { useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'

function App() {
  let heroData = [
    {text1: 'Dive Into',text2:'What you love'},
    {text1: 'Indulge',text2:'Your passions'},
    {text1: 'Give in to',text2:'Your passions'}
  ]
  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App
