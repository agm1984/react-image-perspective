import React, { Component } from 'react'
import dogBackground from './dogBackground.jpg'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}

class TiltPhaseOne extends Component {
  render() {
    return (
      <div style={styles}>
        <h1>Mouse over the photo:</h1>
        <img src={dogBackground} alt="" />
      </div>
    )
  }
}

export default TiltPhaseOne
