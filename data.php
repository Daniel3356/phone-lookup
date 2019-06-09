<?php
$url = 'https://numverify.com';
$content = file_get_contents($url);
$first_step = explode( '<body>' , $content );
$second_step = explode("<div id=\"fb-root\">" , $first_step[1] );
echo $second_step[0];
?>