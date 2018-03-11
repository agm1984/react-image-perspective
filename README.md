# 3D Perspective Tilt
> This project is to help you butcher up some code to learn and/or implement this quickly and efficiently.

## Installation
``` bash
$ git clone https://github.com/agm1984/react-image-perspective.git
$ cd react-image-perspective
$ npm install
$ npm start
```

## Turbo Speed Installation

1. Copy `TiltPhaseSix.js`
2. Paste it into your project
3. Import it into your file
4. Paste this into your file:

``` javascript
import TiltPhaseSix from './TiltPhaseSix'
import dogBackground from './dogBackground.jpg' // Supply your own images
import dogForeground from './dogForeground.png'

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
}

// ...

<Tilt
  options={{}}
  style={{
    background: `url(${dogBackground}) no-repeat fixed center`,
    backgroundSize: 'fit',
    height: 700,
    width: 740,
  }}
>
    <Tilt options={options}>
      <img src={dogForeground} alt="" />
    </Tilt>
</Tilt>
```

## Available Options

`reverse:` if true, photo will transform in the opposite direction

`max:` defines the tilt rotation amount (in degrees)

`perspective:` the transform perspective, (lower = more extreme)

`easing:` allows you to change the easing style and values (default is great)

`scale:` amount to zoom in onMouseEnter (ie: 1 = 100%, 2 = 200%)

`speed:` effect transition speed (in milliseconds)

`transition:` transition on or off (boolean)

`axis:` disable an axis (string, value can be X or Y)

`reset:` reset the effect onMouseLeave (boolean)

**Example**
``` javascript
const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
}
```