const canvas = document.getElementById('canvas')

const starback = new Starback(canvas, {
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  type: 'dot',
  quantity: 100,
  direction: 50,
  backgroundColor: ['#000000'],
  randomOpacity: true,
  speed:0.3,
}) 


