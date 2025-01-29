function areArraysSame(array1, array2){
    var array1Num = prompt("Введите число элементов в первом массиве");
    var array2Num = prompt("Введите число элементов в втором массиве");
    var array1 = [];
    var array2 = [];
 
 if (array1Num === array2Num){
     for (var k  = 0; k < array1Num; k++ ){
         array1 += prompt("Введите числовые элементы первого массива");
    
      }
      for (var t  = 0; t < array2Num; t++ ){
         array2 += prompt("Введите числовые элементы второго массива");
        }
     for (var i  = 0; i < array1.length; i++ ){
         if ( array1[i] === array2[i]){
            
         } else {
            alert(false);
            return false;
         }

    }
    alert(true);
    return true;
 } else {
    alert(false);
    return false;
   }
}
var a = areArraysSame();
