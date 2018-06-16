$(document).ready(function () {

    $("#btnEnviar-empleos").click(function () {

        var proceed = true;

        var nombres = $("#txtNombre").val();
        var email = $("#txtEmail").val();
        var telefono = $("#txtTelef").val();
        var ciudad = $("#txtCiudad").val();
        var experiencia = $("#txtExp").val();
        var consulta = $("#txtMensaje").val();

        if (nombres == "" && telefono == "" && ciudad == "" &&
            email == "" experiencia =="" && consulta == "") {
            proceed = false;
        }

        $("#form input[required], #form textarea[required]").each(function () {
            $(this).css('border-color', '');
            if (!$.trim($(this).val())) { //if this field is empty
                $(this).css('border-color', 'red'); //change border color to red
                proceed = false; //set do not proceed flag
            }

            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                $(this).css('border-color', 'red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
        });

        if (proceed) //everything looks good! proceed...
        {
            post_data = {
                'nombres': $('input[name=txtNombre]').val(),
                'telefono': $('input[name=txtTelef]').val(),
                'experiencia': $('input[name=txtExp]').val(),
                'email': $('input[name=txtEmail]').val(),
                'ciudad': $('#txtCiudad').val()
                'consulta': $('#txtMensaje').val()
            };

            $.post('empleos.php', post_data, function (response) {
                if (response.type == 'error') { //load json data from server and output message
                    output = '<div class="error">' + response.text + '</div>';
                } else {
                    output = '<div class="success">' + response.text + '</div>';

                    $("#form input[required], #form textarea[required]").val('');
                    //$("#form form").slideUp(); //hide form after success
                }
                $("#formHeadEmpleos #res").hide().html(output).slideDown();
            }, 'json');
        }
    });

    $("#form input[required], #form textarea[required]").keyup(function () {
        $(this).css('border-color', '');
        $("#formHead #res").slideUp();
    });
});
