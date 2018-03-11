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

class TiltPhaseFive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {}
    }

    const defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: '1.1',
      speed: '1000',
      transition: true,
      axis: null,
      reset: true
    }

    this.width = null
    this.height = null
    this.left = null
    this.top = null
    this.transitionTimeout = null
    this.updateCall = null
    this.element = null
    this.settings = {
      ...defaultSettings,
      ...this.props.options,
    }
    this.reverse = this.settings.reverse ? -1 : 1

    this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
    this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
    this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
  }

  componentDidMount() {
    this.element = findDOMNode(this)
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTimeout)
    cancelAnimationFrame(this.updateCall)
  }

  handleMouseEnter(cb = () => { }, e) {
    this.updateElementPosition()
    this.setTransition()
    return cb(e)
  }

  reset() {
    window.requestAnimationFrame(() => {
      console.log('RESETTING TRANSFORM STATE', `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        }
      }))
    })
  }

  handleMouseMove(cb = () => { }, e) {
    e.persist()

    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall)
    }

    this.event = e
    this.updateCall = requestAnimationFrame(this.update.bind(this, e))

    return cb(e)
  }

  setTransition() {
    clearTimeout(this.transitionTimeout)

    console.log('SET TRANSITION', `Speed: ${this.settings.speed}ms Easing: ${this.settings.easing}`)
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        transition: `${this.settings.speed}ms ${this.settings.easing}`,
      }
    }))

    this.transitionTimeout = setTimeout(() => {
      console.log('TRANSITION COMPLETE')
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          transition: '',
        }
      }))
    }, this.settings.speed)
  }

  handleMouseLeave(cb = () => { }, e) {
    this.setTransition()

    if (this.settings.reset) {
      this.reset()
    }
    return cb(e)
  }

  getValues(e) {
    const x = (e.nativeEvent.clientX - this.left) / this.width
    const y = (e.nativeEvent.clientY - this.top) / this.height
    const _x = Math.min(Math.max(x, 0), 1)
    const _y = Math.min(Math.max(y, 0), 1)

    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2)
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2)

    const percentageX = _x * 100
    const percentageY = _y * 100

    console.log('JUST GOT NEW VALUES', `X: ${x} Y: ${y} -- TILT X: ${tiltX} TILT Y: ${tiltY} -- TILT X%: ${percentageX} TILT Y%: ${percentageY}`)
    console.log('Notice how X turned into percentageX.')
    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY,
    }
  }

  updateElementPosition() {
    const rect = this.element.getBoundingClientRect()
    this.width = this.element.offsetWidth
    this.height = this.element.offsetHeight
    this.left = rect.left
    this.top = rect.top
  }

  update(e) {
    const values = this.getValues(e)
    console.log('VALUES', values)

    console.log('NEW CSS TRANSFORM VALUES', `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`)
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`,
      }
    }))

    this.updateCall = null
  }

  render() {
    const style = {
      ...this.props.style,
      ...this.state.style
    }
    return (
      <div style={styles}>
        <h1>Mouse over the photo:</h1>
        <div
          style={style}
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

export default TiltPhaseFive
