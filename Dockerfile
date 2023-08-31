FROM node:18.15.0-alpine3.17

RUN mkdir /service-post
WORKDIR /service-post

COPY package*.json .
RUN npm ci

COPY . .
