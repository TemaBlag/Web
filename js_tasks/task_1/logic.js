document.querySelector('.code').addEventListener('click',  () => { // ставим обработчик события
   let data = document.querySelector('.textArea').value;// получеам текс
   var arr = data.split(' ');// раздеяем ткст в массив по пробелу
   var newTextArr = [];
   for (var i = 0; i < arr.length; i++){// бегаем по массиву
      var word = arr[i];
      var newWord = word.split('');// разделяем слова на буквы и бегаем по буквам
      for (var t = 0; t <= newWord.length; t++){
         if ( newWord[t] === "б"){// сравниваем буквы
            newWord[t] = "щ";// меняем буквы
           }
         if (  newWord[t] === "Б"){
            newWord[t]= "Щ";
           }
         if (  newWord[t] === "В"){
            newWord[t]= "Ш";
           }
         if ( newWord[t] === "в"){
            newWord[t] = "ш";
           }
         if (  newWord[t] === "Г"){
            newWord[t]= "Ч";
           }
         if ( newWord[t] === "г"){
            newWord[t] = "ч";
           }
         if (  newWord[t] === "Д"){
            newWord[t]= "Ц";
           }
         if ( newWord[t] === "д"){
            newWord[t] = "ц";
           }
         if (  newWord[t] === "Ж"){
            newWord[t]= "Х";
           }
         if ( newWord[t] === "ж"){
            newWord[t] = "х";
           }
         if (  newWord[t] === "З"){
            newWord[t]= "Ф";
           }
         if ( newWord[t] === "з"){
            newWord[t] = "ф";
           }
         if (  newWord[t] === "К"){
            newWord[t]= "Т";
           }
         if ( newWord[t] === "к"){
            newWord[t] = "т";
           }
         if (  newWord[t] === "Л"){
            newWord[t]= "С";
           }
         if ( newWord[t] === "л"){
            newWord[t] = "с";
           }
         if (  newWord[t] === "М"){
            newWord[t]= "Р";
           }
         if ( newWord[t] === "м"){
            newWord[t] = "р";
           }
         if (  newWord[t] === "Н"){
            newWord[t]= "П";
           }
         if ( newWord[t] === "н"){
            newWord[t] = "п";
           }
      }
      var wordArr = newWord.join("");// объединяем буквы в слова
      newTextArr.push(wordArr);// добавлем слова в массив
   }
   var newArrGet = newTextArr.join(" ");// массив превращаем в текст
   $(".newtextArea").text(newArrGet);// менем текст
})

document.querySelector('.decode').addEventListener('click',  () => {// такая же логика дл дешифровки
   let data = document.querySelector('.textArea').value;
   var arr = data.split(' ');
   var newTextArr = [];
   for (var i = 0; i < arr.length; i++){
      var word = arr[i];
      var newWord = word.split('');
      for (var t = 0; t <= newWord.length; t++){
         if ( newWord[t] === "щ"){
            newWord[t] = "б";
           }
         if (  newWord[t] === "Щ"){
            newWord[t]= "Б";
           }
         if (  newWord[t] === "Ш"){
            newWord[t]= "В";
           }
         if ( newWord[t] === "ш"){
            newWord[t] = "в";
           }
         if (  newWord[t] === "ч"){
            newWord[t]= "г";
           }
         if ( newWord[t] === "Ч"){
            newWord[t] = "Г";
           }
         if (  newWord[t] === "Ц"){
            newWord[t]= "Д";
           }
         if ( newWord[t] === "ц"){
            newWord[t] = "д";
           }
         if (  newWord[t] === "Х"){
            newWord[t]= "Ж";
           }
         if ( newWord[t] === "х"){
            newWord[t] = "ж";
           }
         if (  newWord[t] === "Ф"){
            newWord[t]= "З";
           }
         if ( newWord[t] === "ф"){
            newWord[t] = "з";
           }
         if (  newWord[t] === "Т"){
            newWord[t]= "К";
           }
         if ( newWord[t] === "т"){
            newWord[t] = "к";
           }
         if (  newWord[t] === "С"){
            newWord[t]= "Л";
           }
         if ( newWord[t] === "с"){
            newWord[t] = "л";
           }
         if (  newWord[t] === "Р"){
            newWord[t]= "М";
           }
         if ( newWord[t] === "р"){
            newWord[t] = "м";
           }
         if (  newWord[t] === "П"){
            newWord[t]= "Н";
           }
         if ( newWord[t] === "п"){
            newWord[t] = "н";
           }
      }
      var wordArr = newWord.join("");
      newTextArr.push(wordArr);
   }
   var newArrGet = newTextArr.join(" ");
   $(".newtextArea").text(newArrGet);
})