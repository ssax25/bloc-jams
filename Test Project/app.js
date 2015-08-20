 $( document ).ready(function() {
 //window.onload = function() {
   alert("Pick a healthy snack from the refrigerator!");
 

    var oranges = function() {
      $('.oranges').click(function(){
        console.log("clicked oranges")
        $( this ).css('border', "5px solid orange");
        alert("You chose an orange");
      });
    };  
     oranges();

    // var oranges = document.getElementsByClassName("oranges");

    // oranges[0].onclick = function() {
    //   oranges[0].style.border = "5px solid orange";
    //   alert("You chose an orange!");
    // };

    var apples = function() {
        $('.apples')[0].click(function() {
          border: "5px solid red";
          alert("You chose an apple!");
        });
      };                 
    // var apples = document.getElementsByClassName("apples");

    // apples[0].onclick = function() {
    //   apples[0].style.border = "5px solid red";
    //   alert("You chose an apple!");
    // };
});