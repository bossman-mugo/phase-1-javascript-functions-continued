function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}


  (function () {
    console.log("Yet more razzling");
  });


  const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
  }

  function wrapAdjective (flair = "*"){

    return function(condition = "special"){

      return `You are ${flair}${condition}${flair}!`;


    }
 }

 wrapAdjective()("a hard worker");
 wrapAdjective("||")("a dedicated programmer")