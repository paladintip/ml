<?php

$command = escapeshellcmd('cd /lib/python/optimal-work-hours/ &&
python3 execute-pickle-model.py 4');
$output = shell_exec ( $command );
var_dump($output);
$data['message'] = $output;


header('Content-Type: application/json');
echo json_encode($data);

