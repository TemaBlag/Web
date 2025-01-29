document.querySelector('.recode').addEventListener('click',  () => { // ставим обработчик события
   let let1 = document.querySelector('.letter1').value;// принимаем информацию
   let let2 = document.querySelector('.letter2').value;
   let let3 = document.querySelector('.letter3').value;
   let let4 = document.querySelector('.letter4').value;
   let let5 = document.querySelector('.letter5').value;
   let let6 = document.querySelector('.letter6').value;
   let let7 = document.querySelector('.letter7').value;
   let let8 = document.querySelector('.letter8').value;
   let let9 = document.querySelector('.letter9').value;
   let let10 = document.querySelector('.letter10').value;
   $('.titleh2').css('opacity','1');// показываем текс
   document.querySelector('.code').addEventListener('click',  () => {// ещё один обработчик события
      let data = document.querySelector('.textArea').value;
      var arr = data.split(' ');// разделяем текст на слова в массив
      var newTextArr = [];
      for (var i = 0; i < arr.length; i++){// перебираем массив
         var word = arr[i];
         var newWord = word.split('');// разделяем слово на буквы, чтобы потом сравнить
         for (var t = 0; t <= newWord.length; t++){
            if ( newWord[t] === "б"){// сравниваем буквы
               newWord[t] = let1;
              }
            if (  newWord[t] === "Б"){
               newWord[t]= let1.toUpperCase();
              }
            if (  newWord[t] === "В"){
               newWord[t]= let2.toUpperCase();
              }
            if ( newWord[t] === "в"){
               newWord[t] = let2;
              }
            if (  newWord[t] === "Г"){
               newWord[t]= let3.toUpperCase();
              }
            if ( newWord[t] === "г"){
               newWord[t] = let3;
              }
            if (  newWord[t] === "Д"){
               newWord[t]= let4.toUpperCase();
              }
            if ( newWord[t] === "д"){
               newWord[t] = let4;
              }
            if (  newWord[t] === "Ж"){
               newWord[t]= let5.toUpperCase();
              }
            if ( newWord[t] === "ж"){
               newWord[t] = let5;
              }
            if (  newWord[t] === "З"){
               newWord[t]= let6.toUpperCase();
              }
            if ( newWord[t] === "з"){
               newWord[t] = let6;
              }
            if (  newWord[t] === "К"){
               newWord[t]= let7.toUpperCase();
              }
            if ( newWord[t] === "к"){
               newWord[t] = let7;
              }
            if (  newWord[t] === "Л"){
               newWord[t]= let8.toUpperCase();
              }
            if ( newWord[t] === "л"){
               newWord[t] = let8;
              }
            if (  newWord[t] === "М"){
               newWord[t]= let9.toUpperCase();
              }
            if ( newWord[t] === "м"){
               newWord[t] = let9;
              }
            if (  newWord[t] === "Н"){
               newWord[t]= let10.toUpperCase();
              }
            if ( newWord[t] === "н"){
               newWord[t] = let10;
              }
         }
         var wordArr = newWord.join("");// объединяем буквы в слово
         newTextArr.push(wordArr);// вставляем слово  в массив
      }
      var newArrGet = newTextArr.join(" ");// объединяем слова в текст
      $(".newtextArea").text(newArrGet); // показываем текст
   })
   
   document.querySelector('.decode').addEventListener('click',  () => {// то же самая логика для дешифроки текста
      let data = document.querySelector('.textArea').value;
      var arr = data.split(' ');
      var newTextArr = [];
      for (var i = 0; i < arr.length; i++){
         var word = arr[i];
         var newWord = word.split('');
         for (var t = 0; t <= newWord.length; t++){
            if ( newWord[t] === let1){
               newWord[t] = "б";
              }
            if (  newWord[t] === let1.toUpperCase()){
               newWord[t]= "Б";
              }
            if (  newWord[t] === let2.toUpperCase()){
               newWord[t]= let2;
              }
            if ( newWord[t] === let2){
               newWord[t] = "в";
              }
            if (  newWord[t] === let3){
               newWord[t]= "г";
              }
            if ( newWord[t] === let3.toUpperCase()){
               newWord[t] = "Г";
              }
            if (  newWord[t] === let4.toUpperCase()){
               newWord[t]= "Д";
              }
            if ( newWord[t] === let4){
               newWord[t] = "д";
              }
            if (  newWord[t] === let5.toUpperCase()){
               newWord[t]= "Ж";
              }
            if ( newWord[t] === let5){
               newWord[t] = "ж";
              }
            if (  newWord[t] === let6.toUpperCase()){
               newWord[t]= "З";
              }
            if ( newWord[t] === let6){
               newWord[t] = "з";
              }
            if (  newWord[t] === let7.toUpperCase()){
               newWord[t]= "К";
              }
            if ( newWord[t] === let7){
               newWord[t] = "к";
              }
            if (  newWord[t] === let8.toUpperCase()){
               newWord[t]= "Л";
              }
            if ( newWord[t] === let8){
               newWord[t] = "л";
              }
            if (  newWord[t] === let9.toUpperCase()){
               newWord[t]= "М";
              }
            if ( newWord[t] === let9){
               newWord[t] = "м";
              }
            if (  newWord[t] === let10.toUpperCase()){
               newWord[t]= "Н";
              }
            if ( newWord[t] === let10){
               newWord[t] = "н";
              }
         }
         var wordArr = newWord.join("");
         newTextArr.push(wordArr);
      }
      var newArrGet = newTextArr.join(" ");
      $(".newtextArea").text(newArrGet);
   })
})
