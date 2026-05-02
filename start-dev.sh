#!/bin/bash
cd /home/z/my-project
while true; do
  echo "Starting dev server..."
  NODE_OPTIONS="--max-old-space-size=256" node node_modules/.bin/next dev -p 3000 >> dev.log 2>&1
  echo "Server stopped, restarting in 3s..."
  sleep 3
done
