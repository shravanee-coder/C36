class Form{
    constructor(){}
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(350,50)

        var input = createInput("name")
        input.position(400,150)

        var button = createButton("press")
        button.position(400,210)

        var greeeting = createElement('h3')

    

     button.mousePressed(function(){
         input.hide()
         button.hide()

         var name = input.value()
         playerCount+= 1
         player.update(name)
         player.updateCount(playerCount)

     greeeting.html("hello "+ name )
     greeeting.position(400,120)

        });
}
}
