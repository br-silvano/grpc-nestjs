#!/bin/bash
CMD=/usr/bin

PATH="$(dirname "$(realpath -s "$0")")"
cd $PATH

$CMD/mkdir -p $PATH/logs 2> /dev/null
$CMD/rm -r $PATH/logs/* 2> /dev/null

echo "Build iniciado"

PROJECT=grpc-nestjs-api-gateway
cd ../../$PROJECT
echo "Build do projeto $PROJECT"
$CMD/docker build -t brsilvano/$PROJECT:latest -f Dockerfile.prod --no-cache . >> $PATH/logs/$PROJECT.log

cd $PATH

PROJECT=grpc-nestjs-custom-hello-service
cd ../../$PROJECT
echo "Build do projeto $PROJECT"
$CMD/docker build -t brsilvano/$PROJECT:latest -f Dockerfile.prod --no-cache . >> $PATH/logs/$PROJECT.log

cd $PATH

PROJECT=grpc-nestjs-hello-world-service
cd ../../$PROJECT
echo "Build do projeto $PROJECT"
$CMD/docker build -t brsilvano/$PROJECT:latest -f Dockerfile.prod --no-cache . >> $PATH/logs/$PROJECT.log

cd $PATH

echo "Build finalizado"
