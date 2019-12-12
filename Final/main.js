$('.small-image').hover(function() {
    var currentImgSrc = $(this).attr('src');
  $('#main-image').attr('src', currentImgSrc);
  });

var password = document.getElementById("password"), confirm_password = document.getElementById("confirmPassword");

function checkPasswordMatch() {
    var password = $("#NewPassword").val();
    var confirmPassword = $("#ConfirmPassword").val();

    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords do not match!");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}

$(document).ready(function () {
   $("#ConfirmPassword").keyup(checkPasswordMatch);
});


$('#add-text').click(function(){
    var currentValue =$('#new-input').val()
    var currentUser = $('#new-username').val()
    var dt = new Date ();
    var time = dt.getDate() + '.' + dt.getMonth() + '.' + dt.getFullYear() + ' ' + dt.getHours() + '.' + dt.getMinutes() + '.' + dt.getSeconds()
    var newP = $('<p>' + currentUser + ' ' + time + '<br>' + currentValue + '</p>')
$('#some-output').append(newP)
$(this).val('')
$('#new-input').val('')
$('#new-username').val('')
})

$('#new-input').keyup(function(event){
    var currentValue =$('#new-input').val()
    var currentUser = $('#new-username').val()
    var dt = new Date ();
    var time = dt.getDate() + '.' + dt.getMonth() + '.' + dt.getFullYear() + ' ' + dt.getHours() + '.' + dt.getMinutes() + '.' + dt.getSeconds()
    var newP = $('<p>' + currentUser + ' ' + time + '<br>' + currentValue + '</p>')
    if (event.keyCode == 13){
$('#some-output').append(newP)
$(this).val('')
$('#new-input').val('')
$('#new-username').val('')

    }
})
