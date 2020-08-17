function menu() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "red"
  /**
   * INFINITE MODE
   */
  ctx.fillRect(grid, canvas.height / 2 - 100, grid, 200)
  ctx.font = '50px Georgia';
  ctx.fillStyle = 'black';
  ctx.fillText('∞',grid + grid / 2 - ctx.measureText('∞').width / 2, canvas.height / 2, grid, 200)
  ctx.font = '25px Georgia';
  ctx.fillText('Infinite Mode',grid + grid / 2 - ctx.measureText('Infinite Mode').width / 2, canvas.height / 2 + 50, grid, 200)

  /**
   * LEVEL MODE
   */
  ctx.fillStyle = "red"
  ctx.fillRect(grid * 4, canvas.height / 2 - 100, grid, 200)
  
  ctx.font = '50px Georgia';
  ctx.fillStyle = 'black';
  ctx.fillText('➧',grid*4 + grid / 2, canvas.height / 2, grid, 200)
  ctx.font = '25px Georgia';
  ctx.fillText('Level Mode',grid*4 + grid / 2 - ctx.measureText('Level Mode').width / 2, canvas.height / 2 + 50, grid, 200)
}