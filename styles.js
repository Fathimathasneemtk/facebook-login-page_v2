$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
                maxlength:10
            }

        },
        messages:{
            emailAddress:{
                required:"email address is required",
                email:"type valid email address"

            }
        }
    })
})