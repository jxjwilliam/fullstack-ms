#!/usr/bin/env bash

cd ${APP_DIR}
pm2 stop ms-dbms
pm2 stop gateway
pm2 kill
pkill node

cd ${APP_DIR}/ms-dbms
pm2 start yarn  --watch --name "ms-dbms" -- run start

cd ${APP_DIR}/gateway
pm2 start yarn --watch --name "gateway" -- run start

pm2 save
pm2 status

cd ${APP_DIR}
nohup yarn start2 >${APP_DIR}/nohup.out &
