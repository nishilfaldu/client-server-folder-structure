#!/bin/sh

# cd /app/client
# pm2 start yarn --interpreter sh --name client -- start >/dev/null

cd /app/server
pm2 start yarn --interpreter sh --name server -- start >/dev/null

echo "Application Started Successfully!"

nginx
pm2 logs
