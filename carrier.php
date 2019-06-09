<?php

/*
$host = 'example.com';

if ($_SERVER['HTTP_HOST'] != $host) {
  header("Location: http://$host");
  exit;
}

*/
function wget($url, $follow = true) {

    $host = parse_url($url);

    $agent       = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36';
    $curlHeaders = array(
        'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding: gzip, deflate',
        'Accept-Language: en-US,en;q=0.5',
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        'Connection: Keep-Alive',
        'Pragma: no-cache',
        'Referer: https://www.google.com/',
        'Host: ' . $host['host'] . (isset($host['port']) ? ':' . $host['port'] : null), // building host header
        'Cache-Control: no-cache',
        'Cookie: HPSESSID=d7slmrvj006dklg1g9l1rvlrld; _ga=GA1.2.2022670184.1532927474; _gid=GA1.2.987250077.1532927474; _gat='
    );
    $ch          = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $curlHeaders);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $follow); // following redirects or not
    curl_setopt($ch, CURLOPT_USERAGENT, $agent);
    curl_setopt($ch, CURLOPT_URL, $url);
    $result      = curl_exec($ch);
    return $result;
}
echo(wget('https://numverify.com/php_helper_scripts/phone_api.php?secret_key='.$_GET['secret_key'].'&number='.$_GET['number'].''));
?>