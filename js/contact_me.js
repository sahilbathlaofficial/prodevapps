$(function() {
    $("#connect-button").on('click',function(e) {
        e.preventDefault();
        var email = $("#connect-email").val();
        $("input#email").val(email)
        $('#myModalHorizontal').modal('show');
    })

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            // send mail
            $.ajax({
                // url: "https://db-node-mail-service.herokuapp.com/api/email",
                url: "https://mailer.decabits.com/api/email",
                type: "POST",
                data: {
                    "to": `info@decabits.com`,
                    "cc": `sahilbathla1@gmail.com`,
                    "from": '"Decabits" info@decabits.com',
                    "subject": "Website Contact Form:  " + name,
                    "text": `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nMobile: ${phone}\n\nEmail: ${email}\n\nMessage:\n${message}`,
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear & reset all fields
                    $('#contactForm').trigger("reset");
                    if($('#myModalHorizontal')){
                        $('#myModalHorizontal').modal('hide');
                        $("#connect-email").val('');
                    }
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please check if data is correct or try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
