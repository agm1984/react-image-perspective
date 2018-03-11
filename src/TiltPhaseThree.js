import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import dogBackground from './dogBackground.jpg'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}

class TiltPhaseThree extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.element = null
    this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
    this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
    this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
  }

  componentDidMount() {
    this.element = findDOMNode(this)
  }

  handleMouseEnter(e) {
    this.updateElementPosition()
  }

  handleMouseMove(e) {
    // console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY)
  }

  handleMouseLeave(e) {
    // console.log('onMouseLeave', e.nativeEvent.clientX, e.nativeEvent.clientY)
  }

  updateElementPosition() {
    const rect = this.element.getBoundingClientRect()
    this.width = this.element.offsetWidth
    this.height = this.element.offsetHeight
    this.left = rect.left
    this.top = rect.top
    console.log('REKT', rect)
    console.log('OFFSET WIDTH', this.element.offsetWidth)
    console.log('OFFSET HEIGHT', this.element.offsetHeight)
  }

  render() {
    return (
      <div style={styles}>
        <h1>Mouse over the photo:</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <img src={dogBackground} alt="" />
        </div>
      </div>
    )
  }
}

export default TiltPhaseThree
