FROM node:18.15.0-alpine

WORKDIR /usr/src/app

COPY ./package*.json  ./

RUN yarn install

COPY ./ ./

RUN yarn cache clean

RUN yarn build

EXPOSE 3070

CMD ["yarn", "start"]
