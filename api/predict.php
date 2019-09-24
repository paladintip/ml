<?php

$hour = htmlspecialchars($_GET["hour"]);
$command = "cd /var/www/optimal-work-hours/ &&
python3 execute-pickle-model.py $hour";
header('Content-Type: application/json');
$last_line = system($command, $retval);



