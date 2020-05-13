function nextSequence()
{
    var rand=Math.floor(Math.random()*4);
    return ++rand;
}
var setSequence=[];
var level,flag;
level=1;
flag=0;
function randomSelector(a) 
{
	var x=nextSequence();
	$(".btn_"+(x)).addClass("pressed");
	setTimeout(function(){$(".btn_"+(x)).removeClass("pressed")},300);
    a.push(x);
}
function wrongInput(flag)
{
	$("body").addClass("wrong");
	$("h1").text("You entered the wrong pattern,Refresh to restart");
	flag=1;	
}
function checkPattern()
{
	for (var i=0;i<setSequence.length;i++) 
	{
		$(".btn_container>button").on("click",function(e)
		{
			var x=e.target;
			console.log(setSequence[i]);
			var t=$(x).hasClass("btn_"+setSequence[i]);
			console.log(e.target)
			console.log(t);
			if (!t)
			{
				wrongInput(flag);	
			}
		});
	}
}
function master()
{
	randomSelector(setSequence);
	checkPattern();
}
$(".btn_container>button").on("click",function(e)
{
    $(e.target).addClass("pressed");
    setTimeout(function(){$(e.target).removeClass("pressed")},100);
});
$(".showRule").on("click",function(){$(".rule>p").toggleClass("inv");});
master();
