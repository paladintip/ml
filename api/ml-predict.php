<?php

$command = escapeshellcmd('python3 /lib/python/optimal-work-hours/execute-pickle-model.py 4');
$data['message'] = shell_exec ( $command );


header('Content-Type: application/json');
echo json_encode($data);

