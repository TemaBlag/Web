var positionRight = 0;
var positionLeft = 200;
var positionTop = 200;
var positionDown = 0;
var moveSquare = function(){
   if ( positionTop === 200 && positionRight < 200){
      $("h1").offset({
         top: positionDown,
         left: positionRight
      })
      positionRight += 10;
      positionLeft -= 10;
   }
   if (positionRight === 200 && positionDown < 200){
      $("h1").offset({
         top: positionDown,
         left: positionRight
      })
      positionDown += 10;
      positionTop -= 10;
   }
   if (positionDown === 200 && positionLeft < 200){
      $("h1").offset({
         top: positionDown,
         left:200 - positionLeft
      })
      positionLeft += 10;
      positionRight -= 10;
   }
   if (positionLeft === 200 && positionTop < 200){
      $("h1").offset({
         top: 200 - positionTop,
         left: 0
      })
      positionTop += 10;
      positionDown -= 10;
   }
}
var moveIntervalSquare = setInterval(moveSquare, 100);
 $("h1").click(function(){clearInterval(moveIntervalSquare)})