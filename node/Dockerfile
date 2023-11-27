FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY app/package.json /usr/src/app/

COPY app . /usr/src/app/

EXPOSE 3000

RUN apk update && apk add bash

RUN npm install

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget
