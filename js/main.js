document.addEventListener("DOMContentLoaded", function() {

const flkty = new Flickity( '.main-carousel',{
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });

  const subscribeForm = document.getElementById("subscribe-form");
  subscribeForm.addEventListener("submit", function(event){
    const myEmail = document.getElementById("myemail");
    event.preventDefault();
    if (myEmail.value != "") {
               alert("Thank you for subscribing")
           } else {
               alert("please enter your email");
           }
       
  });
  // cart codes to be added here 

});

