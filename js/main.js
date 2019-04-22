document.addEventListener("DOMContentLoaded", function() {

// all of your code goes inside here


const flkty = new Flickity( '.main-carousel',{
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });

  const subscribeForm = document.getElementById("subscribeForm");
  subscribeForm.addEventListener("submit", function(event){
    const myemail = document.getElementById("myemail");
    event.preventDefault();
    if (myEmail.value != "") {
               alert("Thank you for subscribing");
           } else {
               alert("please enter your email");
           }
       
  });


  //write soem code here e.g. if statements and try alerting a message
  //how would you get the value of the email input?
  //!= '' this line just means that the value is not empty
  // if(check the input value != '')
//

});

