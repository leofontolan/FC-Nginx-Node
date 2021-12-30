#FROM node:17-alpine3.12
FROM node

WORKDIR /usr/src/app

COPY . . 

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]