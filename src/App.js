import React, { Component } from 'react'
import TiltPhaseOne from './TiltPhaseOne'
import TiltPhaseTwo from './TiltPhaseTwo'
import TiltPhaseThree from './TiltPhaseThree'
import TiltPhaseFour from './TiltPhaseFour'
import TiltPhaseFive from './TiltPhaseFive'
import TiltPhaseSix from './TiltPhaseSix'
import dogBackground from './dogBackground.jpg'
import dogForeground from './dogForeground.png'
import './App.css'

// There is no need to edit `styles` or `options`.
const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}
const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
}

/**
 * To fire up a Phase other than Six, comment out the App Class
 * and the export below it. Then, uncomment the export that you desire.
 */

// Phase 1
// export default TiltPhaseOne

// Phase 2
// export default TiltPhaseTwo

// Phase 3
// export default TiltPhaseThree

// Phase 4
// export default TiltPhaseFour

// Phase 5
// export default TiltPhaseFive

// Phase 6
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
