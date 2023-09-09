$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);


//This is for the pop-up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This code will create close the contact from when 
//the user clicks off of it
//The first step is to add an event listener for any clicks on the website

document.addEventListener("click", function(event) {
    //Here we state that if the click happens on the cancel (displayed to user as the Close button) button OR anywhere
    //that is not the contact form AND the click does not happen on any element
    //with the contact class then call the closeForm() function
    
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup")
    && !event.target.closest(".open-button") && !event.target.closest(".Contact")) {
        closeForm()
    }
}, false )
