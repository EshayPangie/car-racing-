class Game{
    constructor(){

    }

    readGameState(){
        var ref = database.ref("gameState")
        ref.on("value", function(data){
            gameState = data.val()
        })
    }

    writeGameState(a){
        database.ref("/").update({
            gameState:a
        })
    }

    startGame(){
        form.heading.hide()
        form.greeting.hide()
        form.inputBox.hide()
        form.registerButton.hide()
        player.readAllPlayers()
        var i = 0
        var h = 800
        image(track_image, 0, -displayHeight * 5, displayWidth, -displayHeight * 6)

        for (var eachPlayer in allPlayers) {
            console.log("hi")
            carArray[i].x = h
            carArray[i].y = displayHeight - allPlayers[eachPlayer].distance
            textSize(20)
            text(allPlayers[eachPlayer].name, carArray[i].x - 30, carArray[i].y - 50)
            i = i + 1
            h = h + 200
        }

        if(keyDown(UP_ARROW)){
            player.playerDistance = player.playerDistance + 10
            player.createPlayerField()
        }
        
        drawSprites()
    }
}