const game_button = document.getElementById("game_button");
var numberOfClicks =0;
var milisecond= 500;
function ID(id)
{
    return document.getElementById(id);
}

game_button.addEventListener("mouseover",(x,y) =>{

    x = (Math.random()*(window.innerWidth - 150));
    y=  Math.random()*(window.innerHeight -50) ;
    setTimeout(() => {
        game_button.style.marginTop=y+"px";
        game_button.style.marginLeft= x+"px";
    }, milisecond);

   

})

game_button.onclick= function(e)
{
    numberOfClicks++;
    if(numberOfClicks!=0 && numberOfClicks%3 ==0)
    {
        window.alert("you can go "+((numberOfClicks/3)+1)  +"level");
        milisecond =milisecond-100;

    }
    

}
