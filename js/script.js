$(document).ready(function(){
    $(".design").click(function(){
        $(".des1").toggle();
        $(".design").toggle();     
    });
    $(".des1").click(function(){
        $(".design").toggle();
        $(".des1").toggle();     
    });
    $(".dev").click(function(){
        $(".textdev").toggle();
        $(".dev").toggle();
    });
    $(".textdev").click(function(){
        $(".dev").toggle();
        $(".textdev").toggle();
    });
    $(".prod").click(function(){
        $(".prodText").toggle();
        $(".prod").toggle();
    });
    $(".prodText").click(function(){
        $(".prod").toggle();
        $(".prodText").toggle();
    });
   
});
function calculator(){
    var final="";
    var nameInput=document.forms["myForm"] ["name"].value;
    alert(nameInput + "we have received your message. Thank you for reaching out to us. We shall respond to the above through your email..");
    var frm = document.getElementsByClassName('myForm')[0];
    frm.submit(); // Submit
    frm.reset(dateObject);  // Reset
    return false; // Prevent page refresh

};




