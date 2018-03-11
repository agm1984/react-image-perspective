import React, { Component } from 'react'
import TiltPhaseSix from './TiltPhaseSix'
import dogBackground from './dogBackground.jpg'
import dogForeground from './dogForeground.png'
import './App.css'

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
}

class App extends Component {
  render() {
    return (
      <div id="App">
        <TiltPhaseSix
          options={{}}
          style={{
            background: `url(${dogBackground}) no-repeat fixed center`,
            backgroundSize: 'fit',
            height: 700,
            width: 740,
          }}
        >
            <TiltPhaseSix
              options={options}
            >
              <img src={dogForeground} alt="" />
            </TiltPhaseSix>
        </TiltPhaseSix>
      </div>
    )
  }
}

export default App
