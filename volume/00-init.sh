#!/bin/bash

pwd

if [ -d /usr/share/nginx/app ]; then
    mv /usr/share/nginx/app/static /usr/share/nginx/static
    echo "[ Move static dir. ]"
    apt update -y
    apt install npm -y
    echo "[ Install NPM. ]"
    cd /usr/share/nginx/app
    npm run build
    rm -rf /usr/share/nginx/html
    mv /usr/share/nginx/app/build /usr/share/nginx/html
    rm -rf /usr/share/nginx/app
    echo "[ Build Complete. ]"
    apt purge npm
    echo "[ Remove NPM. ]"
fi

echo "[ Init 00 Complete. ]"