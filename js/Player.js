class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.rank=null;
    }
    getCount(){
        var getCountRef=database.ref('playerCount');
        getCountRef.on("value",(data)=>{
            this.getCount.ref=data.val();
        });
    }
    updateCount(count){
        database.ref('playerCount').update({
            playerCount:count
            });
    }
}