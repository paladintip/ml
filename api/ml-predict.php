<?php
$hour = htmlspecialchars($_GET["hour"]);
$command = "cd /var/www/optimal-work-hours/ &&
python3 execute-pickle-model.py $hour";

$last_line = system($command, $retval);

$data['chance'] = $last_line;
$data['hour'] = $hour;
header('Content-Type: application/json');
echo json_encode($data);

