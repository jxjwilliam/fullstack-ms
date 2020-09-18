#!/usr/bin/env bash

WORK_DIR=/c/Users/willi/vscodes
NGINX_ROOT=/c/Users/willi/MY_TOOL/nginx-1.18.0

CLIENT=${WORK_DIR}/basic/client
GITBOOK1=${WORK_DIR}/ms/gitbook
GITBOOK2=${WORK_DIR}/basic/gitbook
NEWS=${WORK_DIR}/test/news-api-react

cd ${CLIENT}
yarn build
mv build ${NGINX_ROOT}/

cd ${GITBOOK1}
gitbook build
mv _book ${NGINX_ROOT}/gitbook1

cd ${GITBOOK2}
gitbook build
mv _book ${NGINX_ROOT}/gitbook2


cd ${NEWS}
yarn build
mv build ${NGINX_ROOT}/news_api_react

# nginx restart
