<?php
$id = $_COOKIE["Username"];
$tp = $_COOKIE["TypingPattern"];
$base_url = 'https://api.typingdna.com/save/' + $id;
$apiKey= '{079ecadfe08241731f9777dfc3033267}';
$apiSecret ='{0f251ae38b0d26e133757fd82b80e27e}';
echo '<script>';
    echo 'console.log($id)';
    echo 'console.log($tp)';
echo '</script>';
$ch = curl_init(sprintf($base_url, 'save', $id));
$data = array('tp' => $tp);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_USERPWD, $apiKey . ":" . $apiSecret);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data) . "\n");

$response = curl_exec($ch);
curl_close($ch);
var_dump($response);
?>