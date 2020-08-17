function levelPicker() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  /**
   * INFINITE MODE
   */

  let levelGrid = canvas.width/7
  let levelGridH = canvas.height/7
   let levelNumber = 0
   for(let i = 1; i < 7; i+=2){
    for(let j = 1; j <= 6; j+=2) {
      levelNumber+=1
      ctx.fillStyle = "red"
      ctx.fillRect(levelGrid*i, levelGridH *j, levelGrid, levelGridH)
      ctx.font = '50px Georgia';
      ctx.fillStyle = 'white';
      ctx.fillText(levelNumber,(levelGrid*i)+(levelGrid/2)-(ctx.measureText(levelNumber).width/2), levelGridH*j + levelGridH/2 + levelGrid/10, levelGrid, levelGridH)
    }
   }
  
}