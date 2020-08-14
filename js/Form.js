class Form{
    constructor(){
        this.input=createInput('Name');
        this.button=craeteButton('play');
        this.greeting=createElement('h2');
    }
    display(){
        this.title=createElement('h1');
        this.title.html("Car Racing Game");
        this.title.position();

        this.button.position();
        this.input.position();
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello! "+player.name);
            this.greeting.position();
        })
    }
}