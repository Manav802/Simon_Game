var buttonColors=["green","red","blue","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=0;

function playSound(name)
{
    var aud=new Audio("Sounds/"+name+".mp3");
    aud.play();
}

function nextSequence()
{
    var rand=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[rand];
    $("#"+randomChosenColour).fadeTo(100,0,function()
    {
        $(this).fadeTo(100,1);
    });

    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(level);
    level++;
    $("#header_text").text("Level "+level);
}

$(".btn_container>button").on("click",function(e)
{
    $(e.target).addClass("pressed");
    setTimeout(function(){$(e.target).removeClass("pressed")},100);
});

$(".showRule").on("click",function(){$(".rule>p").toggleClass("inv");});

function keyPress()
{
    $(window).on("keydown",function()
    {
        if(!started)
        {
            nextSequence(); 
            started++;
        }
    });
}

function checkAnswer()
{
    if(!level)
    {
        $("#header_text").text("You should start the game firts by pressing any key");
        keyPress();
    }
    else
    { 
        var userChosenColour;
        $("btn_container>button").on("click",function(e){userChosenColour=e.attr("id");});
        console.log(userChosenColour.attr("id"));
        userClickedPattern.push(userChosenColour);
        if(gamePattern[i]===userChosenColour)
        {
            playSound(userChosenColour);
            level++;
            nextSequence();
        }
        else
        {
            playSound("wrong");
            flag=0;
            started=0;
            level=0;
            gamePattern=[];
            $("body").animate()
            keyPress();
        }
    }
}
