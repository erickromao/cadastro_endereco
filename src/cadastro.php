<?php
$cepID = $_POST["cepID"] ?? 0;
$ruaID = $_POST["ruaID"] ?? 0;
$bairroID = $_POST["bairroID"] ?? 0;
$cidadeID = $_POST["cidadeID"] ?? 0;
$ufID = $_POST["ufID"] ?? 0;
$dddID = $_POST["dddID"] ?? 0;
$numeroInputID = $_POST["numeroInputID"] ?? 0;
$complementoID = $_POST["complementoID"] ?? 0;

try {

    $arquivo = "./logs/" . date("d-m-y_h_i_s") . ".txt";

    $conteudo = "CEP: $cepID +RUA: $ruaID +BAIRRO: $bairroID +CIDADE: $cidadeID +UF: $ufID +DDD: $dddID +NUMERO: $numeroInputID +COMPLEMENTO: $complementoID";
    $correntConteudo = str_replace("+", "\n", $conteudo);

    $acessoArquivo = fopen($arquivo, "a+");
    fwrite($acessoArquivo, $correntConteudo);
    fclose($acessoArquivo);
} catch (Throwable) {
    return 0;
}
