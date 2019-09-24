<?php

$data['message'] = shell_exec ( "sudo python3 /lib/python/optimal-work-hours/execute-pickle-model.py 4");


header('Content-Type: application/json');
echo json_encode($data);

