<?php
// Server/KSPSignController.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$input = file_get_contents("php://input");
if (!$input) {
  http_response_code(400);
  echo json_encode(["error" => ["code" => 400, "message" => "Empty body"], "data" => null], JSON_UNESCAPED_UNICODE);
  exit;
}

$targetUrl = "https://id.gov.ua/sign-widget/v20240221/Server/KSPSignController.php";

$ch = curl_init($targetUrl);
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => $input,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HEADER => false,
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json",
    "Accept: application/json",
  ],
  // важливо для Windows, щоб не було "unable to get local issuer certificate"
  CURLOPT_SSL_VERIFYPEER => true,
  CURLOPT_SSL_VERIFYHOST => 2,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($response === false) {
  $err = curl_error($ch);
  curl_close($ch);

  http_response_code(502);
  echo json_encode([
    "data" => null,
    "error" => ["code" => 502, "message" => "Upstream request failed: $err"]
  ], JSON_UNESCAPED_UNICODE);
  exit;
}

curl_close($ch);

http_response_code($httpCode);
header("Content-Type: application/json; charset=utf-8");
echo $response;
