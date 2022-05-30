<?php

/**
 * Proxy CORS
 * @author Wanderlei Silva do Carmo <wander.silva@gmail.com>
 * @version 1.0
 * 
 */

set_time_limit(10);


// create & initialize a curl session
$curl = curl_init();
$dataAtendimento = $_REQUEST["proxyParm"];

$uri = "https://central-atendimento-cliente.herokuapp.com/api/atendimentos/dia/" . $dataAtendimento;
// set our url with curl_setopt()
curl_setopt($curl, CURLOPT_URL, $uri);

// return the transfer as a string, also with setopt()
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// curl_exec() executes the started curl session
// $output contains the output string
$output = curl_exec($curl);

print($output);

// close curl resource to free up system resources
// (deletes the variable made by curl_init)
curl_close($curl);
