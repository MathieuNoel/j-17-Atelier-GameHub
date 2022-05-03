var app = {
  gameOver: false,
  counter: 0,
  player : {
    x: 0,
    y: 0,
    direction: 'right',
  },
  targetCell: {
    x: 5,
    y: 3,
  },

  listenKeyboardEvents() {
      document.addEventListener('keyup', (event) =>{
        if(event.key == "ArrowLeft") {
          app.turnLeft()
        } else if(event.key == "ArrowRight") {
          app.turnRight()
        } else if(event.key == "ArrowUp") {
          app.moveForward()
        } else {
          return
        }
      }
    )
  },

  moveForward() {
    if(app.gameOver===false){
    if(app.player.direction === 'right' && app.player.x === 5){
      return
    } else if(app.player.direction === 'down' && app.player.y === 3){
      return
    } else if(app.player.direction === 'left' && app.player.x === 0){
      return
    } else if(app.player.direction === 'up' && app.player.y === 0){
      return
    }
    if(app.player.direction === 'right') {
      app.player.x++
    } else if(app.player.direction === 'left') {
      app.player.x--
    } else if(app.player.direction === 'up') {
      app.player.y--
    } else {
      app.player.y++
    }
    app.counter++
    app.redDrawBoard()
    }
  },

  turnLeft() {
    if(app.gameOver===false){
    if(app.player.direction === 'right') {
      app.player.direction = 'up'        
     } else if(app.player.direction === 'up') {
      app.player.direction = 'left'
     } else if(app.player.direction === 'left') {
      app.player.direction = 'down'
     } else if(app.player.direction === 'down') {
      app.player.direction = 'right'
     }
     app.counter++
     app.redDrawBoard()
    }
  },
  
  turnRight(direction) {
    if(app.gameOver===false){
    if(app.player.direction === 'right') {
      app.player.direction = 'down'
     } else if(app.player.direction === 'down') {
      app.player.direction = 'left'
     } else if(app.player.direction === 'left') {
      app.player.direction = 'up'
     } else if(app.player.direction === 'up') {
      app.player.direction = 'right'
     }
     app.counter++
     app.redDrawBoard()
    }
  },
  drawBoard() {
    
    var board = document.getElementById('board')
    
    for(var i = 0; i < 4; i++ ){
      var row = document.createElement('div')
      board.appendChild(row)
      row.classList.add('row')
       
      for(var j = 0; j < 6; j++) {
        var cell = document.createElement('div')
        cell.className='cell'
        row.appendChild(cell)
        if(i == app.targetCell.y && j == app.targetCell.x) {
          cell.classList.add('targetCell')
          console.log(app.targetCell)
        } 
        if(i == app.player.y && j == app.player.x){
          var divPlayer = document.createElement('div')
          divPlayer.classList.add('player')          
          divPlayer.classList.add(app.player.direction)
          cell.appendChild(divPlayer)
        }    
      };
    };
    app.isGameOver()   
  },

  isGameOver() {
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y){
      alert('tada! vous avez effectuer ' + app.counter + ' mouvements')
      app.gameOver = 'true';      
    }
  },
  
  clearBoard() {
    document.getElementById('board').innerHTML = ' ';
  },
  
  redDrawBoard() {
     app.clearBoard()
     app.drawBoard()
  },
  
  init: function () {
    app.listenKeyboardEvents()
    app.drawBoard();
    
    console.log('init !');
  }

}

document.addEventListener('DOMContentLoaded', app.init);

