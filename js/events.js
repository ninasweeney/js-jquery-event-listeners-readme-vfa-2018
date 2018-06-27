function getIt() {
  $('p').on('click',function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').('load',function() {
    $('img').addClass('tasty')
  }
}


  

$(document).ready(function(){

console.log(getIt)

});
