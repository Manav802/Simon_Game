var buttonColors=["green","red","blue","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
$(".showRule").on("click",function(){$(".rule>p").toggleClass("inv");});//toggles the rules
function playSound(name)//Plays audio name.mp3
{
    var aud=new Audio("Sounds/"+name+".mp3");
    aud.play();
}
function nextSequence()
{
  userClickedPattern = [];
  var rand=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColors[rand];
  $("#"+randomChosenColour).fadeTo(100,0,function()
  {
    $(this).fadeTo(100,1);
});
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  level++;
  $("#header_text").text("Level "+level);
}

$(".btn_container>button").on("click",function(e)
{
    $(e.target).addClass("pressed");
    setTimeout(function(){$(e.target).removeClass("pressed")},100);
    var i=$(this).attr("id");
    playSound(i);
    userClickedPattern.push(i);
    checkAnswer(userClickedPattern.length-1);
});


$(document).on("keydown",function()
{
    if(!started)
    {
        nextSequence();
        started=true;
    }
});


function checkAnswer(currentLevel) 
{

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function () 
            {
              nextSequence();
          }, 1000);
        }
    } 
    else 
    {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#header_text").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");}, 200);
        startOver();
    }
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = 0;
}
