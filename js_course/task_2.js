function unique(arr) {// создание функции для удаления повторяющихся
    let result = [];// элементов в массиве
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
}
document.querySelector('.variable').addEventListener('click',  () => {//функция после нажатия на кнопку
    let let1 = document.querySelector('.letterK').value;// приём информации
    let let2 = document.querySelector('.letterB').value;
    let let3 = document.querySelector('.letterN').value;
    var num1 =  Number(let1);// переводим из строк в числа
    var num2 =  Number(let2);
    var num3 =  Number(let3);
    var counter = 0;
    var arr = [];
    for (var x = 0; x < num3; x++){// перебираем x
      var y = num1 * x + num2;
      var newV = y % num3;// остаток от деления
      arr.push(newV); // добавляем в массив 
    } 
    var newArr = unique(arr);// удалаяем потворяющиеся оcтатки
    var counter = newArr.length;
    $('.textOst').text("Количество остатков от деления: " + counter);// выводим данные
    $('.textOst1').text("Сами остатки: " + newArr);
})
