function getIt() {
  $('p').on('click',function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load',function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form').on('keydown',function(key) {
    if (key.which ===71){
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit',function() {
    alert('Your form is going to be submitted now');
    return;
  });
}
  

$(document).ready(function(){

console.log(getIt)
console.log(frameIt)
console.log(pressIt)
console.log(submitIt)

});
