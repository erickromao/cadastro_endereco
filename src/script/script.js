$(document).ready(function () {

    //Consumindo a API e inserindo os dados
    $("#cepID").focusout(function () {

        if ($('#cepID').val()) {
            $.ajax({
                url: "https://viacep.com.br/ws/" + $('#cepID').val() + "/json/",
                type: "GET",
                dataType: "JSONP",
                data: {},
                success: function (data) {
                    if (data != null) {
                        $("#resultado").html("")
                        $("#cidadeID").val(data.localidade);
                        $("#ufID").val(data.uf);
                        $("#dddID").val(data.ddd);
                    }
                },
                error: function (error) {
                    $("#resultado").html("CEP inválido ou não encontrado")
                    console.log(error)
                }
            })
        }
    })

    //Enviando os dados para o arquivo php
    $("#botaoEnviar").click(function () {

        const obj = {
            cepID: $("#cepID").val(),
            ruaID: $("#ruaID").val(),
            bairroID: $("#bairroID").val(),
            cidadeID: $("#cidadeID").val(),
            ufID: $("#ufID").val(),
            dddID: $("#dddID").val(),
            numeroInputID: $("#numeroInputID").val(),
            complementoID: $("#complementoID").val()
        }

        if (!$("#cepID").val()) {
            $("#resultado").html("Informe o CEP")
            return;
        }

        $.ajax({

            url: "./src/cadastro.php",
            type: "POST",
            dataType: "TEXT",
            data: obj,
            beforeSend: function () {
                $("#resultado").html("processando...")
            },
            success: function (data) {
                if (data != null) {
                    $("#resultado").html("Endereço cadastrado com sucesso!")
                }
                console.log(data)


            },
            error: function (error) {
                console.error(error)
            }
        })

    })
})
