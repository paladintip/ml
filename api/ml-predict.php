<?php

$command = escapeshellcmd('cd /var/www/optimal-work-hours/ &&
python3 execute-pickle-model.py 4');

$last_line = system('cd /var/www/optimal-work-hours/ &&
python3 execute-pickle-model.py 4', $retval);


$data['message'] = $last_line;


echo '
<hr />Last line of the output: ' . $last_line . '
<hr />Return value: ' . $retval;

header('Content-Type: application/json');
echo json_encode($data);

