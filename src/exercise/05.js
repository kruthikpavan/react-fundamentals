// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, style, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>

      {mediumBox}
      <Box size="small">New Box</Box>
    </div>
  )
}

export default App
