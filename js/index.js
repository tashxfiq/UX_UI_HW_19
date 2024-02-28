console.log("Your index.js file is loaded correctly!" );

$(document).ready(function(){
    // jQuery event listener to change text color of "Let's Chat" link in header and footer when clicked
    $('.footer-options li:contains("Let\'s Chat"), .header-options li:contains("Let\'s Chat")').click(function() {
      $(this).css('color', 'red'); // Change to the desired color
    });
  });
  
  