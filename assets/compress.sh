#!/bin/bash

echo "hello"
for i in *.jpg; do
	echo 'https://storage.googleapis.com/casa-independ-test-1/dist/assets/'$i
	curl -XPOST -O -L 'https://im2.io/dtljcpqdxw/4096x4096,scale-down/https://storage.googleapis.com/casa-independ-test-1/dist/assets/'$i
done