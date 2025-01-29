function unique(arr) { // создание функции для удаления повторяющихся
    let result = [];   // элементов в массиве
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
}
document.querySelector('.variable').addEventListener('click',  () => { //функция после нажатия на кнопку
    let let1 = document.querySelector('.letterK').value; // приём информации
    let let2 = document.querySelector('.letterB').value;
    let let3 = document.querySelector('.letterN').value;
    let let31 = document.querySelector('.letterN1').value;
    var num1 =  Number(let1); // переводим из сторик в числа
    var num2 =  Number(let2);
    var num30 =  Number(let3);
    var num31 =  Number(let31);
    var num3 = Math.pow(num30, num31); //возводим в степень
    var counter = 0;
    var arr = [];
    for (var x = 0; x < num1; x++){ // перебираем x
      var y = x * ( x + 1 );
      var newV = y % num1; // остаток от деления
      arr.push(newV);  // добавляем в массив
    } 
    var newArr = unique(arr); // удалаяем потворяющиеся оcтатки
    var counter = newArr.length;
    $('.textOst').text("1.Количество остатков от деления: " + counter); // выводим данные
    $('.textOst1').text("1.Сами остатки: " + newArr);
    var counter = 0;// обнуляем, а дальше по такому же принципу
    var arr = [];
    for (var x = 0; x < num2; x++){
        var y = x * ( x + 1 );
        var newV = y % num2;
        arr.push(newV); 
    } 
    var newArr = unique(arr);
    var counter = newArr.length;
    $('.textOst2').text("2.Количество остатков от деления: " + counter);
    $('.textOst12').text("2.Сами остатки: " + newArr);
    var counter = 0;
    var arr = [];
    for (var x = 0; x < num3; x++){
        var y = x * ( x + 1 );
        var newV = y % num3;
        arr.push(newV); 
    } 
    var newArr = unique(arr);
    var counter = newArr.length;
    $('.textOst3').text("3.Количество остатков от деления: " + counter);
    $('.textOst13').text("3.Сами остатки: " + newArr);
})
