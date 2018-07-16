#!/bin/sh
tmp_file=/tmp/$$stat
curl 'http://0.0.1:3000/admin/monitor/stat?uid=1234&token=abcd' > $tmp_file
js-beautify $tmp_file
rm $tmp_file 2&>/dev/null
