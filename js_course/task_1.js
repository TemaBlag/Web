var arrayFriends = ["Илья", "Кирилл", "Арсений", "Женя", "Влад"];
for ( var i = 0; i < arrayFriends.length; i++){ 
  $("body").append("<p>" + arrayFriends[i] + "</p>");
};
$("h1").text("Мои друзья");
$("p").hide(3000).fadeIn(3000);
$("p").append(" лучший");

