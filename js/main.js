document.addEventListener("DOMContentLoaded", function() {

// all of your code goes inside here

console.log('this is working');
const flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });


  const button = document.getElementById("subscribe");
  button.addEventListener("submit", function(event) {
alert( Thank you for subscribing! )
    console.log("subscribe");
  });

  //write soem code here e.g. if statements and try alerting a message
  //how would you get the value of the email input?
  //!= '' this line just means that the value is not empty
  // if(check the input value != '')
//


});
