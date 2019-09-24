<?php

$command = escapeshellcmd('cd /lib/python/optimal-work-hours/ &&
python3 execute-pickle-model.py 4');
$data['message'] = shell_exec ( $command );


header('Content-Type: application/json');
echo json_encode($data);

