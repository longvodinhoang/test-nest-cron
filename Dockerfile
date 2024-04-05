FROM node:16.20.0-alpine

RUN apk add curl

WORKDIR /app

COPY . /app

RUN yarn install --frozen-lockfile

RUN yarn build

ENTRYPOINT [ "yarn", "start:prod" ]

EXPOSE 3000