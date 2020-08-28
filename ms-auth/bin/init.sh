#!/usr/bin/env bash

set -eo pipefail

mongoimport --db ms-auth --collection users --file ./demousers.json

# TODO
moreusers=<<__EOF__

__EOF__

cat ${moreusers} | mongoimport --db ms-auth --collection users
