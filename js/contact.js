$(function(){
  $("#closebutton").click(function(){
      $("#onsubmit").fadeTo("fast", 1, function(){
          $("#name, #email, #message, #submit").attr("disabled", false);
          $("#name, #email, #message").val("");
          $("#success").hide();
      });
  });
  $("#form").submit(function(event){
    console.log(event);
    var datastring = "name="+$("#name").val()+"&email="+$("#email").val()+"&message="+$("#message").val();
    $.ajax({
        type: "POST",
        url: "http://cs-people.bu.edu/swsmith/email2.php",
        data: datastring,
        success: function(){
            console.log("Success")
            $( "#onsubmit" ).fadeTo( "fast" , 0.5, function() {
                $("#success").show();
                $("#name, #email, #message, #submit").attr("disabled", true);
            });
        }

    })
    event.preventDefault();
    return false;
  });


});