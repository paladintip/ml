<?php

$hour = htmlspecialchars($_GET["hour"]);
$command = "cd /var/www/optimal-work-hours/ &&
python3 execute-pickle-model.py $hour";

$last_line = system($command, $retval);

header('Content-Type: application/json');
echo json_encode(array('chance' => $last_line, 'hour' => $hour));

